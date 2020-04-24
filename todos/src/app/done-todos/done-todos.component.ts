import { Component, OnInit, Input } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
// import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-done-todos',
  templateUrl: './done-todos.component.html',
  styleUrls: ['./done-todos.component.css'],
})
export class DoneTodosComponent implements OnInit {
  // public todos;
  @Input() parentData;

  constructor(private _TodosService: TodosServiceService) {}

  doneList = [];
  doneTodos() {
    for (let todo of this.parentData) {
      if (todo.completed == true) {
        this.doneList.push(todo.title);
      }
    }
    return this.doneList;
  }
  ngOnInit() {
    // this.todos = this._TodosService
    //   .getTodos()
    //   .subscribe((data) => (this.todos = data));
  }
}
