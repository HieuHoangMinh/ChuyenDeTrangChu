import { Component, OnInit,Injector } from '@angular/core';

import {BaseComponent} from '../lib/base-component';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  list_item:any;
  item_1sp:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
     Observable.combineLatest(
       this._api.get('/api/Product/get-all'),
     ).takeUntil(this.unsubscribe).subscribe(res => {
       this.list_item = res[0];
       this.item_1sp = this.list_item[0];
       setTimeout(() => {
         this.loadScripts();
      });
     }, err => { });


    }
     addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
