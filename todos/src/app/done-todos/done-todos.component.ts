import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-done-todos',
  templateUrl: './done-todos.component.html',
  styleUrls: ['./done-todos.component.css'],
})
export class DoneTodosComponent implements OnInit {
  public todos;
  constructor(private _TodosService: TodosServiceService) {}
  doneList = [' '];
  doneTodos() {
    for (let todo of this.todos) {
      if (todo.completed == true) {
        this.doneList.push(todo.title);
      }
    }
    return this.doneList;
  }
  ngOnInit() {
    this._TodosService.getTodos().subscribe((data) => (this.todos = data));
  }
}
