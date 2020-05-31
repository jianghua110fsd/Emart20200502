import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product.service';
import { Product, PrdSearchCond, CartResp} from '../data.model';
import { orders } from '../orders';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // orders = orders;
  searchlist: CartResp;

  constructor(protected productService: ProductService) { }

  ngOnInit() {
	this.productService.getCartInfo("b13").subscribe(
      (response: any) => {
        this.searchlist = response;
      }
    )
  }

}
