import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsellerComponent } from './signseller.component';

describe('SignsellerComponent', () => {
  let component: SignsellerComponent;
  let fixture: ComponentFixture<SignsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
