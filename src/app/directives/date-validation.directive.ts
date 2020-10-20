import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[departureDateCheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateValidationDirective, multi: true}]
})
export class DateValidationDirective implements Validator {
  @Input('departureDateCheck') departureDateCheck : string[] = [];

  validate(formGroup: FormGroup): ValidationErrors{

    console.log('testXX');
    
    const control = formGroup.controls[this.departureDateCheck[0]];

    if (!control || !this.departureDateCheck){
      return null;
    }

    if (control.errors && !control.errors.departureDateCheck){
      return null;
    }

    // let d1 = new Date().setHours(0,0,0,0);
    // let d2 = new Date(2020,9,19).setHours(0,0,0,0);
    // console.log(d1 === d2);

    //console.log(typeof control.value);
    //console.log(Date.parse(control.value));
    //console.log(control.value.setHours(0,0,0,0));
    //console.log(new Date().setHours(0,0,0,0));

    // console.log('current value: ' + control.value);
    // console.log('parsed: ' + Date.parse(control.value));
    // console.log('today: ' + new Date().setHours(0,0,0,0));

    let submittedDate = Date.parse(control.value);
    let todayDate = new Date().setHours(0,0,0,0)

    // console.log(submittedDate);
    // console.log(new Date());
    // console.log(submittedDate < new Date().setHours(0,0,0,0));

    // if (submittedDate < todayDate){
    //   control.setErrors({departureDatePast: true});
    // }else if(submittedDate !== todayDate && submittedDate > todayDate){
    //   control.setErrors(null);
    // }
    // else {
    //   control.setErrors({departureDateCheck: true});
    // }


    if(submittedDate !== todayDate && submittedDate > todayDate){
      control.setErrors(null);
    }
    else {
      control.setErrors({departureDateCheck: true});
    }

  }
}