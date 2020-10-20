import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, FormControl, Validators, AbstractControl, ControlContainer } from '@angular/forms';

@Directive({
  selector: '[routeValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RouteValidationDirective, multi: true}]
})
export class RouteValidationDirective implements Validator {

  @Input('routeValidation') routeValidation: string[] = [];

  validate(formGroup: FormGroup) : ValidationErrors {

      const origin = formGroup.controls[this.routeValidation[0]];
      const destination = formGroup.controls[this.routeValidation[1]];

      if(!origin || !destination || !this.routeValidation){
        return null;
      }

      //console.log('origin ' + origin.value);
      //console.log('destination ' + destination.value);

      if(destination.errors && !destination.errors.routeValidation){
        return null;
      }

      if(origin.value === destination.value){
        destination.setErrors({routeValidation: true});
      }else{
        destination.setErrors(null);
      }

  }
};
