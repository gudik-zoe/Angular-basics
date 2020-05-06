import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count1 = 0;
  count2 = 0;
  constructor() {}

  activeToinactive() {
    this.count1++;
    console.log(this.count1);
  }
  inactiveToactive() {
    this.count2++;
    console.log(this.count2);
  }
}
