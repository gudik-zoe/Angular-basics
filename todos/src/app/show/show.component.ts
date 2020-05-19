import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  todos;
  input;
  message = '';
 
  
  editMode = false;
  clickedTodo;
  
  doneTodos = []
  unDoneTodos = [];
  constructor(private service: TodosServiceService ,
    private router: Router) {}

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
   this.service.removeTodo(id)
  }
  checkTodos() {
        this.service.takeTodos.emit(this.todos)
        this.reminder = !this.reminder;
  }
  done(id) {
    this.service.doneTodo(id)
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

  navigate(){
    this.router.navigate(['new'])
  }


  ngOnInit() {
    this.todos = this.service.getTodos()
  }
}
