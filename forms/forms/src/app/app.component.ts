import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = ['easy', 'medium', 'hard'];
  userModel = new User(
    'tony',
    'khoury',
    'asda@hotmail.com',
    123456,
    'hard',
    'sera',
    true
  );
}
