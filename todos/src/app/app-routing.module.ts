import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { AppComponent } from './app.component';
import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';
import { ProvaComponent } from './prova/prova.component';
// import { DoneTodosComponent } from './done-todos/done-todos.component';
// import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';
// import { ListComponent } from './list/list.component';

const routes: Routes = [
  //  {path:'' , redirectTo:'/show' , pathMatch: 'full'},
  //  { path: 'new', component: NewComponent },
  //  {path:'show' , component:ShowComponent ,children:[
  //   {path:'' , component:ProvaComponent},
  //   {path:':id' , component:NewComponent}
  //  ]},
  //  {path:'un-done-todos' , component:UnDoneTodosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//  export const routingComponents = [NewComponent , ShowComponent , UnDoneTodosComponent];
