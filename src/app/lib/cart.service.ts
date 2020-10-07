import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items = this.itemsSubject.asObservable();
  constructor() {
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    if (!local_storage) {
      local_storage = [];
    }
    this.itemsSubject.next(local_storage);
  }

  //THÊM GIỎ HÀNG
  addToCart(item) {
    item.quantity = 1;
    let local_storage:any;
    if (localStorage.getItem('cart') == null) {
      local_storage = [item];
    } else {
      local_storage = JSON.parse(localStorage.getItem('cart'));
      let ok = true;
      for (let x of local_storage) {
        if (x.item_id == item.item_id) {
          x.quantity += 1;
          ok = false;
          break;
        }
      }
      if(ok){
        local_storage.push(item);
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  //LẤY VÈ GIỎ HÀNG
  getItems() {
    if (localStorage.getItem('cart') == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }


  //Xóa 1 sản phẩm trong giỏ
  deleteItem(item_id) {
    let local_storage = this.getItems().filter((x) => x.item_id != item_id);
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }


  //thêm số lượng
  addQty(item) {
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    for (let x of local_storage) {
      if (x.item_id == item.item_id) {
        x.quantity = item.quantity;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  //nhập số lượng
  numberOfItems() {
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    return local_storage.length;
  }


  //xóa hết
  clearCart() {
   localStorage.clear();
   this.itemsSubject.next(null);
  }
}
