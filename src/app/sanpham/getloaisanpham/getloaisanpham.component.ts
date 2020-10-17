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
  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.list = [];
    this.page = 1;
    this.pageSize = 5;
    this._route.params.subscribe(params => {
      this.item_group_id = params['id'];
      this._api.post('/api/Product/search', { page: this.page, pageSize: this.pageSize, item_group_id: this.item_group_id}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        }, err => { });
   });

   this._api.get('/api/ProductCategory/get-all').takeUntil(this.unsubscribe).subscribe(res => {
    this.list_cate = res;
  });
  this._api.get('/api/Product/get-all').takeUntil(this.unsubscribe).subscribe(res => {
    this.list_product = res;
  });
  this._api.get('/api/Brand/get-all').takeUntil(this.unsubscribe).subscribe(res => {
    this.list_brand = res;
  });
  }
  loadPage(page) {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.post('/api/Product/search', { page: page, pageSize: this.pageSize, item_group_id: id}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        }, err => { });
   });
  }
   addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
