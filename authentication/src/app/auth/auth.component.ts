import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

myForm:FormGroup
  constructor(private fb:FormBuilder , 
    private http:HttpClient , 
    private router:Router , 
    private service :EventService) { }

  signIn = false
  error = false
  errorMessage=''
  isloading = false
  loggedIn= false

  switch(){
    this.signIn = !this.signIn
  }



  signUp(){   
    let email = this.myForm.get('email').value
 let password = this.myForm.get('password').value
    this.isloading = true
    if (!this.signIn){
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1dSw4fhE_vyBAYYCeuafUIdDAH-cP_9c',
    {
      email: email , 
      password: password,
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

      else {
        this.error = true 
        this.errorMessage = 'unknown error occured'
      }
    })
  }
  
  else{
    //needs to be adjusted "go to tutorial"
    this.isloading = true
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1dSw4fhE_vyBAYYCeuafUIdDAH-cP_9c',
    {
      email:email,
      password:password,
      returnSecureToken : true

    }).subscribe(
      data => {
        console.log('succeded' , data)
        this.isloading = false
        this.router.navigate(['/content'])
         this.loggedIn = true
        this.service.stateSender.emit(this.loggedIn)
      },
      error =>{
        this.isloading = false
        this.error = true
        if (error.error.error.message == 'EMAIL_NOT_FOUND'){
            this.errorMessage = 'email not found'
        }
        else if 
          (error.error.error.message == 'INVALID_PASSWORD'){
            this.errorMessage = 'incorrect password'
        }
        else {
        this.errorMessage = 'dono what happened'
       
        }
      }
    )
  }
  this.myForm.reset()
}
    ngOnInit() {
 this.myForm = this.fb.group({
   email:['' , [Validators.required , Validators.email]],
   password : ['' , [Validators.required , Validators.minLength(6)]]
 })
  }

}

