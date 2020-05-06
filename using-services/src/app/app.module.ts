import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaService } from './prova.service';
import { ValidNamesComponent } from './valid-names/valid-names.component';
import { InvalidNamesComponent } from './invalid-names/invalid-names.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [AppComponent, ValidNamesComponent, InvalidNamesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProvaService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
