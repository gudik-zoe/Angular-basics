import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  function = new EventEmitter();
  todos = [
    { title: 'learn Angular', completed: true, id: 1 },
    { title: 'practice Angular', completed: false, id: 2 },
    { title: 'create projects', completed: false, id: 3 },
  ];

  addTodo(data) {
    this.todos.push({ title: data, completed: false, id: 3 });
  }

  doneTodo(i) {
    this.todos[i].completed = !this.todos[i].completed;
  }

  removeTodo(i) {
    this.todos.splice(i, 1);
  }

  getDoneTodos() {
    this.todos.map((todo) => {
      if (todo.completed == true) {
        return todo.title;
      }
    });
  }
}

// private _url: string = '/assets/todos.json';
// constructor(private http: HttpClient) {}
// getTodos(): Observable<ITodo[]> {
//   return this.http.get<ITodo[]>(this._url);
// }
