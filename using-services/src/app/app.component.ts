import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'using-services';
  myForm:FormGroup
  constructor() {}

  onSubmit(){
    console.log(this.myForm.get.value)
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      name : new FormControl(''),
      lastName: new FormControl('')
    })
  }
}
