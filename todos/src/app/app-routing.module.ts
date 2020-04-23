import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoneTodosComponent } from './done-todos/done-todos.component';
import { UnDoneTodosComponent } from './un-done-todos/un-done-todos.component';

const routes: Routes = [
  { path: 'done-todos', component: DoneTodosComponent },
  { path: 'un-done-todos', component: UnDoneTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DoneTodosComponent, UnDoneTodosComponent];
