import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  constructor() {}
  count = 1;
  public todos = [{ title: 'test', completed: false, id: 0 }];
  input;

  add() {
    this.todos.push({
      title: this.input,
      completed: false,
      id: this.count++,
    });
    this.input = null;
  }

  done(id) {
    this.todos[id].completed = !this.todos[id].completed;
  }
  remove(id) {
    this.todos.splice(id, 1);
  }

  ngOnInit(): void {}
}
