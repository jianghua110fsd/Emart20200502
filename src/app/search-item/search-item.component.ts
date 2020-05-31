import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product.service';
import { Product, PrdSearchCond, Cart} from '../data.model';

// import { searchlist } from '../searchlist';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  // searchlist = searchlist;
  searchlist: any;
  addCartFlag: string;
  
  keyword: string;
  categoryId: string;
  subcategoryId: string;
  priceFrom: number;
  priceTo: number;

  constructor(protected productService: ProductService) {
  }

  ngOnInit() {
    this.productService.searchAll().subscribe(
      (response: any) => {
        this.searchlist = response;
      }
    )
  }

  bsearch() {
	let cond: PrdSearchCond = {
		prdName: this.keyword,
		categoryId: this.categoryId,
		subcategoryId: this.subcategoryId,
		priceFrom: this.priceFrom,
		priceTo: this.priceTo
	};
	
	this.productService.filter(cond).subscribe(
      (response: any) => {
        this.searchlist = response;
      }
    )
  }

  addToCart(prd: Product) {
	let cart: Cart = {
		// TODO: buyerId to be decided
		buyerId: "b13",
		productId: prd.productId,
		productName: prd.productName,
		sellerId: prd.sellerId,
		purchasePrice: prd.currentPrice,
		purchaseNum: 1,
		remarks: ""
	};
	
	this.productService.addToCart(cart).subscribe(
      (response: any) => {
        this.addCartFlag = response;
		if (this.addCartFlag == "1") {
			alert("Product: " + cart.productName + " has been added to your cart.");
		} else {
			alert("Product: " + cart.productName + " is already in your cart.");
		}
      }

    )
	
  }

}
