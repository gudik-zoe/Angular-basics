import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellsService } from './spells.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsService } from './pokemons.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SpellsService, PokemonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
