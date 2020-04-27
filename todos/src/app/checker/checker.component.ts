import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css'],
})
export class CheckerComponent implements OnInit {
  @Input() todos;
  phrase;
  done = [];
  show;
  function() {
    this.show = this.todos.every((todo) => {
      todo.completed == true;
    });
    if (this.show == false) {
      return 'you still have';
    } else {
      return 'you are all set';
    }
  }

  ngOnInit(): void {}
}
