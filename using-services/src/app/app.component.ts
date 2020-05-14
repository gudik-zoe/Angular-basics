import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'using-services';
  myForm:FormGroup
  constructor() {}

  submit(){
    console.log(this.myForm.value)
  }
  ngOnInit() {}
}
