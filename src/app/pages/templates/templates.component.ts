import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  user = {
    name: '',
    lastName: '',
    email: '',
    country: ''
  }

  countries: any[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((resp: any) => {
      this.countries = resp;
      this.countries.unshift({ name: '--SELECCIONE--', code: '' });
    })
  }

  public save(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls)
        .forEach(control => {
          control.markAsTouched();
        })
      return;
    }

    console.log(form.value);
  }

}
