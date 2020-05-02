import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTopComponent } from './seller-top.component';

describe('SellerTopComponent', () => {
  let component: SellerTopComponent;
  let fixture: ComponentFixture<SellerTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
