import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienhechungtoiComponent } from './lienhechungtoi.component';

describe('LienhechungtoiComponent', () => {
  let component: LienhechungtoiComponent;
  let fixture: ComponentFixture<LienhechungtoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienhechungtoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienhechungtoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
