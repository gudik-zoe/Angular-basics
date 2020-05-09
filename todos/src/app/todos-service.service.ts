import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ITodo } from './todo';
// import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  function = new EventEmitter();
  todos = [
    { title: 'learn Angular', completed: true, id: 0 },
    { title: 'practice Angular', completed: false, id: 1 },
    { title: 'create projects', completed: false, id: 2 },
  ];
  id = 2;

  idMaker() {
    return this.id++;
  }

  addTodo(data) {
    this.todos.push({ title: data, completed: false, id: this.idMaker() });
  }

  doneTodo(i) {
    this.todos[i].completed = !this.todos[i].completed;
  }

  removeTodo(i) {
    this.todos.splice(i, 1);
  }
}

// private _url: string = '/assets/todos.json';
// constructor(private http: HttpClient) {}
// getTodos(): Observable<ITodo[]> {
//   return this.http.get<ITodo[]>(this._url);
// }
