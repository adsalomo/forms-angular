import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

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
}
