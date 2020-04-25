import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosServiceService } from './todos-service.service';
// import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';
// import { DoneTodosComponent } from './done-todos/done-todos.component';
import { HttpClientModule } from '@angular/common/http';
import { DoneTodosComponent } from './done-todos/done-todos.component';
import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, routingComponents, DoneTodosComponent, UnDoneTodosComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TodosServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
