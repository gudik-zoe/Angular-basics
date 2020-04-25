import { Component } from '@angular/core';

import { TodosServiceService } from '../app/todos-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos;

  constructor(private _TodosService: TodosServiceService) {}
  title = 'todos';

  // doneTodos() {
  //   let list = [];
  //   for (let todo of this.todos) {
  //     if (todo.completed == true) {
  //       list.push(todo.title);
  //     }
  //   }
  //   return list;
  // }

  // unDoneTodos() {
  //   let otherList = [];
  //   for (let todo of this.todos) {
  //     if (todo.completed == false) {
  //       otherList.push(todo.title);
  //     }
  //   }
  //   return otherList;
  // }

  ngOnInit() {
    this.todos = this._TodosService
      .getTodos()
      .subscribe((data) => (this.todos = data));
  }
}
