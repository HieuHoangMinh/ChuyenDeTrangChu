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
 id:any;
public hoadonForm: FormGroup;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.hoadonForm = new FormGroup({
      ten: new FormControl('', Validators.required),
      ho: new FormControl(''),
      dia_chi: new FormControl('', Validators.required),
       sdt:new FormControl('', Validators.required),
      email:new FormControl('')
    });


    this._cart.items.subscribe((res) => {
      this.thanhtoan = res;
      console.log(this.thanhtoan);
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
themdonhang(input){

let user={
hoten:input.ho+input.ten,
ngaysinh:null,
diachi:input.dia_chi,
gioitinh:null,
email:input.email,
taikhoan:null,
matkhau:null,
role:"User",
image_url:null,
};
this._api.post('/api/Users/create-user',user).takeUntil(this.unsubscribe).subscribe(res => {

 this.id=res.user_id;
   }, err => { });
   console.log(this.id);
let order={customerID:this.id,shipName: input.ho+input.ten,shipMobile:input.sdt, shipAddress:input.dia_chi,shipEmail:input.email,listjson_chitiet: this.thanhtoan };
console.log(order);
this._api.post('/api/Order/create-item',order).takeUntil(this.unsubscribe).subscribe(res => {
 alert("đã thêm đơn hàng, cảm ơn bạn đã ủng hộ!");
    }, err => { });
}

}
