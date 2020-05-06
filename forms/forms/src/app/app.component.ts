import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = ['easy', 'medium', 'hard'];
  hasError = true;
  mailError;
  validatedifficulty(value) {
    if ('default' == value) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
  }
  share() {
    window.alert('submit');
  }
  validatemail(value) {
    value.indexOf('@') == -1
      ? (this.mailError = true)
      : (this.mailError = false);
  }
  userModel = new User(
    'tony',
    'khoury',
    'asda@hotmail.com',
    123456,
    'default',
    'sera',
    true
  );
}
