import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  myForm = this.fb.group({
    userName: ['tony', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    new: this.fb.group({
      adress: [''],
      city: [''],
      town: [''],
    }),
  });
}
