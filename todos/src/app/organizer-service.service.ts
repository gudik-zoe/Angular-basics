import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrganizerServiceService {
  constructor() {}

  doneTodosList = [];

  unDoneTodosList = [];

  addToDone(todo) {
    this.doneTodosList.push(todo);
  }
  addToUnDoneTodos(todo) {
    this.unDoneTodosList.push(todo);
  }
  getdoneItems() {
    return this.doneTodosList;
  }
  getundoneItems() {
    return this.unDoneTodosList;
  }
}
