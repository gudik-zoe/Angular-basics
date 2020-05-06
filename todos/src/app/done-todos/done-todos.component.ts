import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-done-todos',
  templateUrl: './done-todos.component.html',
  styleUrls: ['./done-todos.component.css'],
})
export class DoneTodosComponent implements OnInit {
  constructor(private service: TodosServiceService) {}
  doneTodos;

  get() {
    this.service.getDoneTodos;
  }
  ngOnInit() {
    // this.doneTodos = this.service.getDoneTodos();
  }
}
