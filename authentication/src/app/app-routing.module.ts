import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {path: 'auth' , component:AuthComponent },
  {path: 'content' , component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
