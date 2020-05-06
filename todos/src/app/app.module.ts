import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosServiceService } from './todos-service.service';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
// import { DoneTodosComponent } from './done-todos/done-todos.component';
// import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';
import { ManagerComponent } from './manager/manager.component';
import { CheckerComponent } from './checker/checker.component';
import { ShowComponent } from './show/show.component';
import { DoneTodosComponent } from './done-todos/done-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // // DoneTodosComponent,
    // // UnDoneTodosComponent,

    ManagerComponent,
    CheckerComponent,
    ShowComponent,
    DoneTodosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TodosServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
// routingComponentsroutingComponents
