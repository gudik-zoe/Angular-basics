import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import {  Custome } from './custome.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm:FormGroup

  submit(){
    console.log(this.myForm.value)
  }
  ngOnInit() {
    this.myForm=this.fb.group({
      name : [ '' , Validators.required] ,
      lastName : ['' , Validators.required],
      email : ['' , Validators.required],
      password : ['' , [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', Validators.required  ],
      city : ['' , Validators.required],
      province : ['' , Validators.required],
      streetNumber : ['' , Validators.required]
    } 
    , { validator : [Custome.confirmation , Custome.number] }  
    ) 
  }

    

}
