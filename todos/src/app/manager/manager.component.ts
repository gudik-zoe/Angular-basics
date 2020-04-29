import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  @Output() function = new EventEmitter();
  constructor() {}
  count = 1;
  public todos = [{ title: 'test', completed: false, id: 0 }];
  input;
  show = false;
  add() {
    this.todos.push({
      title: this.input,
      completed: false,
      id: this.count++,
    });
    this.input = null;
  }
  phrase = 'all set';
  done(id) {
    this.todos[id].completed = !this.todos[id].completed;
  }
  remove(id) {
    this.todos.splice(id, 1);
  }
  result;
  transport() {
    this.function.emit(
      this.todos.map((todo) => {
        if (todo.completed == false) {
          this.result = ` you still have
          ${todo.title} `;
        } else {
          this.result = ` ${todo.title} 
          is done `;
        }
        return this.result;
      })
    );
  }

  ngOnInit(): void {}
}
