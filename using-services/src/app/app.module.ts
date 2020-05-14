import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaService } from './prova.service';

import { CounterService } from './counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule , FormsModule],
  providers: [ProvaService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
