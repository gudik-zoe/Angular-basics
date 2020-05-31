import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Custome} from '../registration/custome.validator'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private fb:FormBuilder , 
    private service:AuthService , 
    private route:Router) { }

  loggedIn = []

  formError = false
signUpForm : FormGroup

signInForm:FormGroup
name
signIn = true

getName(){
return this.name = this.signInForm.get('email').value 
}

toStore(){
  this.route.navigate(['products'])
}

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
    this.name = email
  },
  error=> {
    console.log(error)
  }
)

}
else {
  let email = this.signInForm.get('email').value
  let password = this.signInForm.get('password').value
  this.service.signIn(email,password)
}
  
}
  



  ngOnInit() {
    this.loggedIn = this.service.get()
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

