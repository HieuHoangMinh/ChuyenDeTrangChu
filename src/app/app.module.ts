import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SanphamComponent } from './sanpham/sanpham.component';
import { Err404Component } from './err404/err404.component';
import { LoginComponent } from './login/login.component';
import { ThuonghieuComponent } from './thuonghieu/thuonghieu.component';
import { TrangComponent } from './trang/trang.component';
import { LienhechungtoiComponent } from './lienhechungtoi/lienhechungtoi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SanphamComponent,
    Err404Component,
    LoginComponent,
    ThuonghieuComponent,
    TrangComponent,
    LienhechungtoiComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
