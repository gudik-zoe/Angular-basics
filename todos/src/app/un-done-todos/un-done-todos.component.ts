import { Component, OnInit, Input } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
// import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-un-done-todos',
  templateUrl: './un-done-todos.component.html',
  styleUrls: ['./un-done-todos.component.css'],
})
export class UnDoneTodosComponent implements OnInit {
  @Input() parentData;
  // public todos;
  constructor(private _TodosService: TodosServiceService) {}

  unDoneTodos = [];
  function() {
    for (let todo of this.parentData) {
      if (todo.completed == false) {
        this.unDoneTodos.push(todo.title);
      }
    }
    return this.unDoneTodos;
  }

  ngOnInit() {
    // this.todos = this._TodosService
    //   .getTodos()
    //   .subscribe((data) => (this.todos = data));
  }
}
