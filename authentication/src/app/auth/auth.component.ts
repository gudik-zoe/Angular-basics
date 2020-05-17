import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient} from '@angular/common/http';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
myForm:FormGroup
  constructor(private fb:FormBuilder , 
    private http:HttpClient) { }

  signIn = false
  error = false
  errorMessage=''
  isloading = false

  switch(){
    this.signIn = !this.signIn
  }
  email = this.myForm.get('email').value
 password = this.myForm.get('password').value
  signUp(){   
    this.isloading = true
    if (!this.signIn){
    
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1dSw4fhE_vyBAYYCeuafUIdDAH-cP_9c',
    {
      email: this.email , 
      password: this.password,
      returnSecureToken : true
    }
    ).subscribe(data => {
      console.log(data)
      this.isloading = false
    }, error => {
      this.error = true
      this.isloading = false
      if(error.error.error.message == 'EMAIL_EXISTS'){
      this.errorMessage ='the mail already exists'
      }
    })
  }
  
  else{
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1dSw4fhE_vyBAYYCeuafUIdDAH-cP_9c',
    {
      email:this.email,
      password:this.password,
      
    })
  }
}
    ngOnInit() {
 this.myForm = this.fb.group({
   email:['' , [Validators.required , Validators.email]],
   password : ['' , [Validators.required , Validators.minLength(6)]]
 })
  }

}

