import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit {
  chitiet:any;
  category_id:any;
  productRelative:any;
  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.chitiet = {};
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._api.get('/api/Product/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.category_id = res;
        this._api.get('/api/Product/get-item-related/' + id + '/' + this.category_id.categoryID).takeUntil(this.unsubscribe)
          .subscribe((data) => {
            this.productRelative = data;
            setTimeout(() => {
              this.loadScripts();
            });
        });
        this.chitiet = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });


  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }

}
