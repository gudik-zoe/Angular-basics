import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  private _url: string = '/assets/todos.json';
  constructor(private http: HttpClient) {}
  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this._url);
  }
}
