import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-getloaisanpham',
  templateUrl: './getloaisanpham.component.html',
  styleUrls: ['./getloaisanpham.component.css']
})
export class GetloaisanphamComponent extends BaseComponent implements OnInit {
  list: any;
  list_cate: any;
  list_product:any;
  list_brand:any;
  page: any;
  pageSize: any;
  totalItems:any;
  item_group_id:any;
  sptheoloai:any;
  index:any;
  size:any;
  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.list = [];
    this.sptheoloai=[];
    this.page = 1;
    this.pageSize = 5;
    this.index=1;this.size=8;

    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/sp-by-loai/'+(this.index)+'/'+(this.size)+'/'+(id)).takeUntil(this.unsubscribe).subscribe(res => {
        this.sptheoloai = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
 });
   this._api.get('/api/ProductCategory/get-all').takeUntil(this.unsubscribe).subscribe(res => {
    this.list_cate = res;
  });

  this._api.get('/api/Brand/get-all').takeUntil(this.unsubscribe).subscribe(res => {
    this.list_brand = res;
  });
  }
  loadPage(index) {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/sp-by-loai/'+(index)+'/'+(this.size)+'/'+(id)).takeUntil(this.unsubscribe).subscribe(res => {
        this.sptheoloai = res;
        this.totalItems = res.total;

        }, err => { });
   });console.log(this.totalItems);
  }
   addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
