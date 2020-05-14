import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosServiceService } from './todos-service.service';

import { HttpClientModule } from '@angular/common/http';

import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';
import { ProvaComponent } from './prova/prova.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, routingComponents, UnDoneTodosComponent, ProvaComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TodosServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

