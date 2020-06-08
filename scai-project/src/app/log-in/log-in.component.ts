import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    this.signUp = false
  }
  signIn(){
    console.log('sign in')
  }
signUpForm:FormGroup
signInForm:FormGroup
  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['' , Validators.required],
      lastName:['' , Validators.required],
      email:['' , Validators.required],
      password: ['' , Validators.required],
      confirmPassword:['' , Validators.required],
      gender:['', Validators.required],
    })
    this.signInForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

}
