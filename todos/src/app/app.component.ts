import { Component } from '@angular/core';

// import { TodosServiceService } from '../app/todos-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'todo';
  public hello;
  constructor() {}

  ngOnInit() {}
}
