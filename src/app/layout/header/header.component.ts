import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  list_item:any;
  thuonghieu:any;
  giohang:any;
  tongtien:any;
  tongmuc2:any;


  constructor(injector: Injector) {
    super(injector);
  }

    ngOnInit(): void {
      this._api.get('/api/Brand/get-all').takeUntil(this.unsubscribe).subscribe(res => {
        this.thuonghieu = res;
      });
      this._api.get('/api/ProductCategory/get-all').takeUntil(this.unsubscribe).subscribe(res => {
        this.list_item = res;
      });
      this._cart.items.subscribe((res) => {
        this.giohang = res;
        this.tongtien = 0;
        this.tongmuc2=this.giohang.length;
        for(let x of this.giohang){
          x.money = x.quantity * x.price;
          this.tongtien += x.quantity * x.price;
        }

      });
  }

}
