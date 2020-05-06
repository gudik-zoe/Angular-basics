import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  constructor(private counter: CounterService) {}
  validNames = ['bruce', 'wayne'];
  invalidNames = ['clark', 'kent'];

  setToActive(i, name) {
    this.validNames.push(name);
    this.invalidNames.splice(i, 1);
    this.counter.inactiveToactive();
  }
  setToInactive(i, name) {
    this.invalidNames.push(name);
    this.validNames.splice(i, 1);
    this.counter.activeToinactive();
  }
}
