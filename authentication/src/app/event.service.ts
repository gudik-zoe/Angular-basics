import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  stateSender = new EventEmitter()
  constructor() { }
  
}
