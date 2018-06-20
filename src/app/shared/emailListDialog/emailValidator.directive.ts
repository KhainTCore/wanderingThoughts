import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[validEmailAddress]',
    providers: [{provide: NG_VALIDATORS, useExisting: emailValidatorDirective, multi: true}]
  })
  export class emailValidatorDirective implements Validator {   
    validate(control: AbstractControl): {[key: string]: any} | null {
      return emailAddressValidator(new RegExp(/[a-z0-9\.]+@.{9,}/, 'i'))(control);
    }
  }
  
export function emailAddressValidator(validFormat: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = validFormat.test(control.value);
    return !valid ? {'invalidEmailAddress': {value: control.value}} : null;
  };
}