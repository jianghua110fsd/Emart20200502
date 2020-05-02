import { Component, OnInit } from '@angular/core';

import { orders } from '../orders';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders = orders;
  constructor() { }

  ngOnInit() {
  }

}
