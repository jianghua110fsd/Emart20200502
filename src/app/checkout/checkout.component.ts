import { Component, OnInit } from '@angular/core';

import { orders } from '../orders';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orders = orders;
  ttlAmt: number;
  constructor() { }

  ngOnInit() {
    this.ttlAmt = 0;
    for (const ord of orders) {
      this.ttlAmt = this.ttlAmt + ord.purchase_amount;
    }
  }

}
