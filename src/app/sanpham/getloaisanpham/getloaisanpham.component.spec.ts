import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetloaisanphamComponent } from './getloaisanpham.component';

describe('GetloaisanphamComponent', () => {
  let component: GetloaisanphamComponent;
  let fixture: ComponentFixture<GetloaisanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetloaisanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetloaisanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
