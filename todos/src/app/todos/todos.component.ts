import { Component, OnInit, Input } from '@angular/core';

import { TodosServiceService } from '../todos-service.service';
import { OrganizerServiceService } from '../organizer-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public todos;
  constructor(
    private _TodosService: TodosServiceService,
    private _OrganizerService: OrganizerServiceService
  ) {}
  // @Input() parentData;

  hello = 4;

  ngOnInit() {
    this.todos = this._TodosService
      .getTodos()
      .subscribe((data) => (this.todos = data));
  }
  input;
  doneTodos() {
    let list = [];
    for (let todo of this.todos) {
      if (todo.completed == true) {
        list.push(todo.title);
      }
    }
    return list;
  }

  unDoneTodos() {
    let otherList = [];
    for (let todo of this.todos) {
      if (todo.completed == false) {
        otherList.push(todo.title);
      }
    }
    return otherList;
  }
  // zero = '';
  // // idCreator = this.todos.length + 1;
  // nakel = () => {
  //   for (let todo of this.todos) {
  //     if (todo.completed == true) {
  //       return todo.title;
  //     }
  //   }
  // };
  done(id) {
    this.todos[id].completed = !this.todos[id].completed;
    this._OrganizerService.addToDone(id);
  }
  // addToDone(todo) {
  //   this._OrganizerService.addToDone(todo);
  // }

  addToUnDoneTodos(todo) {
    this._OrganizerService.addToUnDoneTodos(todo);
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
      id: this.hello++,
    });
  }
}
