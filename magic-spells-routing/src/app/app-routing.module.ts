import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './spells/name.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultComponent } from './default/default.component';
import { SpellDetailsComponent } from './spell-details/spell-details.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'name', component: NameComponent },
  { path: 'spell-details/:id', component: SpellDetailsComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },

  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  NameComponent,
  PageNotFoundComponent,
  DefaultComponent,
  SpellDetailsComponent,
  PokemonsComponent,
  PokemonDetailComponent,
];
