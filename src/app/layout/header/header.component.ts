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

  constructor(injector: Injector) {
    super(injector);
  }

    ngOnInit(): void {
      this._api.get('/api/Brand/get-all').takeUntil(this.unsubscribe).subscribe(res => {
        this.list_item = res;
      });

  }

}
