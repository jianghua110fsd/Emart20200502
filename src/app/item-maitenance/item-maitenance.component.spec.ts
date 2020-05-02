import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaitenanceComponent } from './item-maitenance.component';

describe('ItemMaitenanceComponent', () => {
  let component: ItemMaitenanceComponent;
  let fixture: ComponentFixture<ItemMaitenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaitenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaitenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
