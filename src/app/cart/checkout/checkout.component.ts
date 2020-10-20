import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {
thanhtoan:any;
tongtientt:any;
tongmuctt:any;
public hoadonForm: FormGroup;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.hoadonForm = new FormGroup({
      ten: new FormControl('', Validators.required),
      ho: new FormControl(''),
      dia_chi: new FormControl('', Validators.required),
      dien_thoai:new FormControl('', Validators.required),
      email:new FormControl('')   
    });


    this._cart.items.subscribe((res) => {
      this.thanhtoan = res;
      this.tongtientt = 0;
      this.tongmuctt=this.thanhtoan.length;
      for(let x of this.thanhtoan){
        x.money = x.quantity * x.price;
        this.tongtientt += x.quantity * x.price;
      }
      setTimeout(() => {
        this.loadScripts();
      },);
    });
  }

}
