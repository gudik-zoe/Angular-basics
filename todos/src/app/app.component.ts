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

  ngOnInit() {
    this.todos = this._TodosService
      .getTodos()
      .subscribe((data) => (this.todos = data));
  }
}
