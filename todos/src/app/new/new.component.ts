import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(private newService: TodosServiceService) {}
  doneTodos = [];
  unDoneTodos = [];

  ngOnInit() {
    this.newService.doneTodos.subscribe((data) => {
      this.doneTodos.push(data);
      console.log(data);
    });
    this.newService.unDoneTodos.subscribe((data) => {
      this.unDoneTodos.push(data);
      console.log(data);
    });
  }
}
