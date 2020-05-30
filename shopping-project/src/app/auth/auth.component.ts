import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
authForm : FormGroup
signIn = false

switch(){
  this.signIn = !this.signIn
}

submit(){
  console.log(this.authForm.value)
  this.signIn = false
}
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.authForm =this.fb.group({
      email:['' , Validators.required],
      password:['' , [Validators.required , Validators.minLength(6)]],
      confirmPassword:['']
})
  }

}
