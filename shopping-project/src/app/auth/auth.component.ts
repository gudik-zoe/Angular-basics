import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Custome} from '../registration/custome.validator'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formError = false
signUpForm : FormGroup

signInForm:FormGroup

signIn = true

switch(){
  this.signIn = !this.signIn
}

submit(){
 
  if (!this.signIn){
  let email = this.signUpForm.get('email').value
  let password = this.signUpForm.get('password').value
this.service.signUp(email , password).subscribe(
  data => {
    console.log(data)
  },
  error=> {
    console.log('error')
  }
)

}
else {
  console.log('this is sign in mode')
}
  
}
  

constructor(private fb:FormBuilder , 
              private service:AuthService) { }

  ngOnInit() {
    this.signUpForm =this.fb.group({
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required , Validators.minLength(6)]],
      confirmPassword:['' , Validators.required]
},{validator : [Custome.confirmation]})

this.signInForm =this.fb.group({
  email:['' , [Validators.required , Validators.email]],
  password:['' , [Validators.required , Validators.minLength(6)]],
  })

}
}

