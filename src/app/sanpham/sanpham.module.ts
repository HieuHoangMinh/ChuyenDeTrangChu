import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietComponent } from './chitiet/chitiet.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import  { Routes,RouterModule } from '@angular/router';
import { SanphamComponent } from './sanpham.component';
import { GetloaisanphamComponent } from './getloaisanpham/getloaisanpham.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';


export const routes: Routes = [
  {path:"",component:SanphamComponent,children:[
    {path:"chitiet",component:ChitietComponent},
    {path:"danhsach",component:DanhsachComponent},
    {path:"getloaisanpham/:id",component:DanhsachComponent},
  ]}
]



@NgModule({
  declarations: [ChitietComponent, DanhsachComponent, GetloaisanphamComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    NgbModule,ReactiveFormsModule,LayoutModule

  ]
})
export class SanphamModule { }
