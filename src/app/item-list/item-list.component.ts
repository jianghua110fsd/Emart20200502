import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { products } from '../products';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  products = products;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goInsert(): void {
    this.router.navigate([`/item-maitenance/0`]);
  }

  goBack(): void {
    history.go(-1);
  }
}