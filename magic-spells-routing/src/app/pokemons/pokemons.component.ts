import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  constructor(
    private _pokemonsService: PokemonsService,
    private router: Router
  ) {}
  public pokemons;
  onSelect(pokemon) {
    this.router.navigate(['/pokemon-detail', pokemon.id]);
  }

  ngOnInit() {
    this._pokemonsService
      .getPokemons()
      .subscribe((data) => (this.pokemons = data));
  }
}
