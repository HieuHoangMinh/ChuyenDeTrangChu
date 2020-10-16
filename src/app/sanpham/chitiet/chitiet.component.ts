import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit {
  chitiet:any;
  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.chitiet = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Product/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.chitiet = res;
        console.log(this.chitiet);
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });
  }

}
