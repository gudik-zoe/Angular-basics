import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(private newService: TodosServiceService) {}
  doneTodos= [];
 

  

  ngOnInit() {
   this.newService.doneTodos.subscribe(data => {
     this.doneTodos = (data)
   })
  }
}
