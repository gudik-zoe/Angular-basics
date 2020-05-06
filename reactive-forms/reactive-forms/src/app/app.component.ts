import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular';
  constructor(private formBuilder: FormBuilder) {}
  forbidenName = ['text'];
  newForm: FormGroup;

  onSubmit() {
    console.log(this.newForm.value);
  }

  checkNames(control: FormControl) {
    if (this.forbidenName.indexOf(control.value) !== -1) {
      return { forbidenNameis: true };
    }
    return null;
  }
  emailasync(control: FormControl) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'tony@tony.com') {
          resolve({ email: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
  ngOnInit() {
    this.newForm = new FormGroup({
      projectName: new FormControl('', [
        Validators.required,
        this.checkNames.bind(this),
      ]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        this.emailasync
      ),
      selectMenu: new FormControl('choose', [Validators.required]),
      gender: new FormControl('female'),
    });
  }
}
