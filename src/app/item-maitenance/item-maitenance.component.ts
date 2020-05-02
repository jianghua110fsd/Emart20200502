import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-item-maitenance',
  templateUrl: './item-maitenance.component.html',
  styleUrls: ['./item-maitenance.component.css']
})
export class ItemMaitenanceComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })}
goBack(): void {
  history.go(-1);
}
}
