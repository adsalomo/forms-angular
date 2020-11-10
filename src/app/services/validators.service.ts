import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noLopez(control: FormControl): ErrorValidate {

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

  existsUser(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'adsalomo') {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 3000)
    })
  }

}
