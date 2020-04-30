import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpellsService {
  private url: string = '/assets/spells.json';
  constructor(private http: HttpClient) {}

  getSpells() {
    return this.http.get(this.url);
  }
}
