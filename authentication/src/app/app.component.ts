import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service:EventService ,
    private router : Router){}
  title = 'authentication';
 
  state;

  navigateBack(){
    this.state= false
    this.router.navigate(['/auth'])
  }
  

ngOnInit(){
  this.service.stateSender.subscribe(
    data => {
      this.state = data
    }
  )

  }
}
