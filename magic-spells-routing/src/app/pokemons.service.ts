import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private url: string = '/assets/pokemon.json';
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(this.url);
  }
}
