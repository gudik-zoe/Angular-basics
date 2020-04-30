import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'antoine';
  interval;
  counter = 0;
  onFunction() {
    window.alert('it works');
  }
  oddArray = [];
  evenArray = [];
  onStart() {
    this.interval = setInterval(() => {
      this.counter++;
      if (this.counter % 2 == 0) {
        this.evenArray.push(this.counter);
      } else {
        this.oddArray.push(this.counter);
      }
    }, 1000);
  }
}
