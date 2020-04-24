import { Component, OnInit, Input } from '@angular/core';

import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // public todos;
  constructor(private _TodosService: TodosServiceService) {}
  @Input() parentData;

  hello = 4;

  ngOnInit() {
    // this.todos = this._TodosService
    //   .getTodos()
    //   .subscribe((data) => (this.todos = data));
  }
  input;
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
    this.parentData[id].completed = !this.parentData[id].completed;
  }
  remove(id) {
    this.parentData.splice(id, 1);
  }
  onChange(event: Event) {
    this.input = (<HTMLInputElement>event.target).value;
  }

  addTodo() {
    this.parentData.push({
      title: this.input,
      completed: false,
      id: this.hello++,
    });
  }
}
