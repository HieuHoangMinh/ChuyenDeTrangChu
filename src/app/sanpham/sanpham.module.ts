import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietComponent } from './chitiet/chitiet.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import  { Routes,RouterModule } from '@angular/router';
import { SanphamComponent } from './sanpham.component';

export const routes: Routes = [
  {path:"",component:SanphamComponent,children:[
    {path:"chitiet",component:ChitietComponent},
    {path:"danhsach",component:DanhsachComponent}
  ]}
]



@NgModule({
  declarations: [ChitietComponent, DanhsachComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),

  ]
})
export class SanphamModule { }
