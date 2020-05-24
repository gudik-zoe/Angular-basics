import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'products' , component:ProductsComponent},
  {path:'card' , component:CartComponent},
  {path:'purchase' , component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
