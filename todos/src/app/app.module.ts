import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosServiceService } from './todos-service.service';

import { HttpClientModule } from '@angular/common/http';

import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [AppComponent, ShowComponent, NewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TodosServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
// routingComponentsroutingComponents
