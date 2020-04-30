import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  public pokemons;
  pokemonId;
  constructor(
    private _pokemonsService: PokemonsService,
    private route: ActivatedRoute
  ) {}

  // function(pokemonId) {
  //   for (let pokemon of this.pokemons) {
  //     if (pokemon.id == pokemonId) {
  //       return JSON.stringify(pokemon.base);
  //     }
  //   }
  // }
  ngOnInit() {
    this._pokemonsService
      .getPokemons()
      .subscribe((data) => (this.pokemons = data));
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pokemonId = id;
  }
}
