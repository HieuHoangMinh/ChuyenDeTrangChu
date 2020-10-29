import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {

  items:any;total:any;tongmuc:any;
  constructor(injector:Injector) {
    super(injector)
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      this.tongmuc=this.items.length;
      for(let x of this.items){
        x.money = x.quantity * x.price;
        this.total += x.quantity * x.price;
      }
      setTimeout(() => {
        this.loadScripts();
      },);
    });
  }
  clearCart() {
    this._cart.clearCart();
    alert('Xóa thành công');
  }
  deleteItem(item){
    this._cart.deleteItem(item);
  }
  addQty(items){
    this._cart.addQty(items);
  }
}
