import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Custome } from './validator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private fb: FormBuilder ) { }
  signUp = true

  submit(){
    console.log(this.signUpForm.value)
  }

  switch(){
    this.signUp =!this.signUp
  }
  signIn(){
    console.log('signed in')
  }
signUpForm:FormGroup
signInForm:FormGroup
  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['' , Validators.required],
      lastName:['' , Validators.required],
      email:['' , [Validators.required,Validators.email]],
      password: ['' , [Validators.required, Validators.minLength(6)]],
      confirmPassword:['' , Validators.required],
      gender:['', Validators.required],
    }, {validator: [Custome.PasswordConfirmation]})
    this.signInForm = this.fb.group({
      email:['' , [Validators.required, Validators.email]],
      password:['' , Validators.required]
    })
  }

}
