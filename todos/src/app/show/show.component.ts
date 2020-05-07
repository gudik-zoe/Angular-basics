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
  array1 = [];
  array2 = [];
  constructor(private service: TodosServiceService) {}

  check(todo) {
    return todo.completed == true;
  }

  function2() {
    return this.todos.every(this.check);
  }

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
  reminder = true;
  function() {
    this.reminder = !this.reminder;
  }

  ngOnInit() {
    this.todos = this.service.todos;
  }
}
