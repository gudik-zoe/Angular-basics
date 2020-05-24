import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import {  Custome } from './custome.validator';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  final = []

  constructor(private fb:FormBuilder ,
              private service:CartServiceService , 
              private router:Router) { }
  myForm:FormGroup
  total(){
    let sum = 0
    for (let i = 0 ; i < this.final.length ; i++){
        sum += this.final[i].price * this.final[i].quantity 
        }
        return sum 
    }
  submit(){
    console.log(this.myForm.value)
  }

  edit(){
    this.router.navigate(['/card'])
  }
  toStore(){
    this.router.navigate(['/products'])
  }
  confirm(){
    console.log(this.final)
  }
  ngOnInit() {
    this.final = this.service.cardItems
    this.myForm=this.fb.group({
      name : [ '' , Validators.required] ,
      lastName : ['' , Validators.required],
      email : ['' , Validators.required],
      password : ['' , [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', Validators.required  ],
      phoneNumber:['' , Validators.required],
      city : ['' , Validators.required],
      province : ['' , Validators.required],
      streetNumber : ['' , Validators.required]
    } 
    , { validator : [Custome.confirmation , Custome.number] }  
    ) 
  }

    

}
