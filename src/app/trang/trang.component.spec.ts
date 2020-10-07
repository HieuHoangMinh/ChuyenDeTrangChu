import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangComponent } from './trang.component';

describe('TrangComponent', () => {
  let component: TrangComponent;
  let fixture: ComponentFixture<TrangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
