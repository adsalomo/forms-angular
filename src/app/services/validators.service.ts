import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noLopez(control: FormControl): { [s: string]: boolean } {

    if (control.value?.toLowerCase() === "lopez") {
      return {
        noLopez: true
      }
    }

    return null;

  }

  passwordsEquals(password: string, password2: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const password2Control = formGroup.controls[password2];

      if (passwordControl.value === password2Control.value) {
        password2Control.setErrors(null);
      } else {
        password2Control.setErrors({ noEquals: true });
      }
    }
  }
}
