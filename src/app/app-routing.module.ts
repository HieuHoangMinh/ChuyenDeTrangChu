import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LienhechungtoiComponent } from './lienhechungtoi/lienhechungtoi.component';
import { LoginComponent } from './login/login.component';
import { ThuonghieuComponent } from './thuonghieu/thuonghieu.component';
import { TrangComponent } from './trang/trang.component';
import { ChitietComponent } from './sanpham/chitiet/chitiet.component';
import { Err404Component } from './err404/err404.component';
import { GetloaisanphamComponent } from './sanpham/getloaisanpham/getloaisanpham.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"sanpham",loadChildren:()=>import('./sanpham/sanpham.module').then(x=>x.SanphamModule)},
  {path:"cart",loadChildren:()=>import('./cart/cart.module').then(x=>x.CartModule)},
  {path:"login",component:LoginComponent},
  {path:"sanpham/chitiet/:id",component:ChitietComponent},
  {path:"sanpham/getloaisanpham/:id",component:GetloaisanphamComponent},

  {path:"lienhe",component:LienhechungtoiComponent},
  {path:"trang",component:TrangComponent},
  {path:"thuonghieu",component:ThuonghieuComponent},
  {path:"**",component:Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
