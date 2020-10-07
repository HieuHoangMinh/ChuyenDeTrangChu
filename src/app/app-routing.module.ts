import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Err404Component } from './err404/err404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"sanpham",loadChildren:()=>import('./sanpham/sanpham.module').then(x=>x.SanphamModule)},
  {path:"cart",loadChildren:()=>import('./cart/cart.module').then(x=>x.CartModule)},
  {path:"login",component:LoginComponent},
  {path:"**",component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
