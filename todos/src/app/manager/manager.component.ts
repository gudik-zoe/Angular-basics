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
  result(todo) {
    return todo.completed == true;
  }

  result1 = 'you are all set';
  result2 = this.todos.map((todo) => {
    if (todo.completed == false) {
      return todo.title;
    }
  });
  transport() {
    let tony = ' ';
    this.function.emit(
      this.todos.every(this.result)
        ? this.result1
        : this.todos.map((todo) => {
            if (todo.completed == false) {
              return 'you still have:' + todo.title;
            }
          })
    );
    return this.result1, this.result2;
  }
  //       if(this.tony == true){
  //       return 'all set'
  //                     }
  //    else {
  //         return todo.title
  // }
  //      )
  //     }
  ngOnInit(): void {}
}
