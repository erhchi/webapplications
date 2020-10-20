import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[numberRange]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberRangeDirective, multi: true}]
})
export class NumberRangeDirective implements Validator {

  //@Input('numberRange') numberRange: number;
  @Input('numberRange') numberRange: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {

    const control = formGroup.controls[this.numberRange[0]];
      
      if (!control || !this.numberRange){
        return null;
      }

      if (control.errors && !control.errors.numberRange){
        return null;
      }

      if (control.value === 0 ){
        control.setErrors({numberRange: true})
      }else if (control.value > 5){
        control.setErrors({overRange: true})
      }else{
        control.setErrors(null);
      }
    }
}
