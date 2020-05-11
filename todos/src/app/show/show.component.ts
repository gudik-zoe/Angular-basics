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
message = ''
  doneTodos;
  editMode = false;
  clickedTodo;
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
  done(id) {
    this.service.doneTodo(id);
  }
  add(input) {
    if (this.editMode) {
      this.todos[this.clickedTodo].title = input;
      this.input = null;
      this.editMode = false;
      this.message=''
      
      
    } else {
      this.service.addTodo(input);
      this.input = null;
      this.editMode = false;
      this.message=''
    
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
