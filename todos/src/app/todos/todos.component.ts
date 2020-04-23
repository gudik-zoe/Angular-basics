import { Component, OnInit } from '@angular/core';

import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private _TodosService: TodosServiceService) {}
  public todos = [];
  // public doneTodos = [];
  // public unDoneTodos = [];

  // organizer() {
  //   for (let todo of this.todos) {
  //     if (todo.completed !== true) {
  //       return this.unDoneTodos.push(todo.title);
  //       console.log(this.unDoneTodos);
  //     } else if (todo.completed == true) {
  //       return this.doneTodos.push(todo.title);
  //       console.log(this.doneTodos);
  //     }
  //   }
  // }
  // listDone = ' ';
  // listUnDone = ' ';
  // doneTodos() {
  //   for (let todo of this.todos) {
  //     if (todo.completed == true) {
  //       this.listDone += todo.title;
  //     }
  //   }
  //   return this.listDone;
  // }
  // unDoneTodos() {
  //   for (let todo of this.todos) {
  //     if (todo.completed !== true) {
  //       this.listUnDone += todo.title;
  //     }
  //   }
  //   return this.listUnDone;
  // }

  input;

  idCreator = this.todos.length + 1;

  done(id) {
    this.todos[id].completed = !this.todos[id].completed;
  }
  remove(id) {
    this.todos.splice(id, 1);
  }
  onChange(event: Event) {
    this.input = (<HTMLInputElement>event.target).value;
  }
  addTodo() {
    this.todos.push({
      title: this.input,
      completed: false,
      id: this.idCreator++,
    });
  }

  ngOnInit() {
    this._TodosService.getTodos().subscribe((data) => (this.todos = data));
  }
}
