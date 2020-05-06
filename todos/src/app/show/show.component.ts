import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  todos;
  input;
  doneTodos;
  constructor(private service: TodosServiceService) {}

  delete(id) {
    this.service.removeTodo(id);
  }
  done(id) {
    this.service.doneTodo(id);
  }
  add(input) {
    this.service.addTodo(input);
    this.input = null;
  }
  boo = 'hey';

  function() {
    this.service.function.emit((this.boo = 'hello'));
  }

  // getDoneTodos() {
  //   this.service.getDoneTodos(this.todos);
  // }
  ngOnInit() {
    this.todos = this.service.todos;
  }
}
