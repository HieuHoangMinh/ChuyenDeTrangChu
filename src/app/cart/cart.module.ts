import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './cart.component';
import {CheckoutComponent} from '../cart/checkout/checkout.component';
import {Routes,RouterModule} from '@angular/router';
const routes:Routes=[
{path:"",component:CartComponent},
{path:"checkout",component:CheckoutComponent},
]
@NgModule({
  declarations: [
    CartComponent,CheckoutComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CartModule { }
