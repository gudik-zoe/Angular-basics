import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Custome } from '../log-in/validator';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  changePassword = false;
  newUser;
  getEmail() {
    return JSON.parse(localStorage.getItem('key')).email;
  }
  getPassword() {
    return JSON.parse(localStorage.getItem('key')).password;
  }
  change() {
    this.changePassword = true;
  }
  confirm() {
    this.newUser = {
      email: this.changePasswordForm.get('email').value,
      password: this.changePasswordForm.get('newPassword').value,
    };
    localStorage.setItem('key', JSON.stringify(this.newUser));
  }
  ngOnInit() {
    this.changePasswordForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmNewPassword: ['', Validators.required],
      },
      { validator: [Custome.changePassword] }
    );
  }
}
