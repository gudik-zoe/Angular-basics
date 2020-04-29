import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css'],
})
export class CheckerComponent implements OnInit {
  @Input() todos;
  done2 = [];
  show = true;

  checker() {
    this.show = !this.show;
  }

  dones = [];
  notDones = [];

  ngOnInit(): void {}
}
