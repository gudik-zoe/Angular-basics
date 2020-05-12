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
  message = '';
  doneTodos;
  editMode = false;
  clickedTodo;
  newArray = [];
  constructor(private service: TodosServiceService) {}

  check(todo) {
    return todo.completed == true;
  }

  function2() {
    return this.todos.every(this.check);
  }
  edit(id) {
    this.input = this.todos[id].title;
    this.clickedTodo = id;
    this.editMode = true;
  }

  delete(id) {
    this.service.removeTodo(id);
  }
  checkTodos() {
    for (let todo of this.todos)
      if (todo.completed == true) {
        this.service.doneTodos.emit(todo.title);
      } else {
        this.service.unDoneTodos.emit(todo.title);
      }
  }
  done(id) {
    this.service.doneTodo(id);
    this.checkTodos();
  }

  add(input) {
    if (this.editMode) {
      this.todos[this.clickedTodo].title = input;
      this.input = null;
      this.editMode = false;
      this.message = '';
    } else {
      this.service.addTodo(input);
      this.input = null;
      this.editMode = false;
      this.message = '';
    }
  }

  reminder = true;
  function() {
    this.reminder = !this.reminder;
  }

  ngOnInit() {
    this.todos = this.service.todos;
  }
}
