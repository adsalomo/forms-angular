import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private validators: ValidatorsService) {
    this.createForm();
    this.loadData();
  }

  ngOnInit(): void {
  }

  get nameInvalid() {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get lastNameInvalid() {
    return this.form.get('lastName').invalid && this.form.get('lastName').touched;
  }

  get emailInvalid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get passwordInvalid() {
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  get password2Invalid() {
    const password = this.form.get('password').value;
    const password2 = this.form.get('password2').value;
    return (password === password2) ? false : true;
  }

  get countryInvalid() {
    return this.form.get('address.country').invalid && this.form.get('address.country').touched;
  }

  get cityInvalid() {
    return this.form.get('address.city').invalid && this.form.get('address.city').touched;
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5), this.validators.noLopez]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      address: this.fb.group({
        country: ['', [Validators.required, Validators.minLength(5)]],
        city: ['', [Validators.required, Validators.minLength(5)]]
      }),
      hobbies: this.fb.array([

      ])
    });
  }

  // 204
  loadData() {
    this.form.reset({
      name: 'Joe Joe',
      lastName: 'Doe Doe',
      email: 'jondoe@gmail.com',
      address: {
        country: 'Estambul',
        city: 'Kanzas'
      }
    });
  }

  create() {
    if (this.form.invalid) {
      return Object.values(this.form.controls)
        .forEach(control => {
          if (control instanceof FormGroup) {
            Object.values(control.controls)
              .forEach(control => control.markAsTouched());
          } else {
            control.markAsTouched();
          }
        });
    }
    console.log(this.form);
  }

  addHobbie() {
    this.hobbies.push(this.fb.control('Nuevo elemento', Validators.required));
  }

  deleteHobby(i: number) {
    this.hobbies.removeAt(i);
  }

}
