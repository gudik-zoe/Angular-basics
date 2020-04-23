import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-un-done-todos',
  templateUrl: './un-done-todos.component.html',
  styleUrls: ['./un-done-todos.component.css'],
})
export class UnDoneTodosComponent implements OnInit {
  constructor(private _TodosService: TodosServiceService) {}
  public todos;
  unDoneList = [];
  unDoneTodos() {
    for (let todo of this.todos) {
      if (todo.completed !== true) {
        this.unDoneList.push(todo.title);
      }
    }
    return this.unDoneList;
  }
  ngOnInit() {
    this._TodosService.getTodos().subscribe((data) => (this.todos = data));
  }
}
