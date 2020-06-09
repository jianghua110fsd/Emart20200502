import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService} from '../services/product.service';
import { Product, PrdSearchCond, CartReq} from '../data.model';

// import { searchlist } from '../searchlist';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  // searchlist = searchlist;
  searchlist: any;
  categorylist: any;
  subcategorylist: any;
  addCartFlag: string;
  
  keyword: string;
  categoryId: string;
  subcategoryId: string;
  priceFrom: number;
  priceTo: number;

  constructor(protected productService: ProductService,
				protected router: Router) {
  }

  ngOnInit() {
	this.categoryId = "";
	this.subcategoryId = "";
    this.productService.searchAll().subscribe(
      (response: any) => {
        this.searchlist = response;
      }
    )
	
	// Get filter item category list
    this.productService.getCategories().subscribe(
      (response: any) => {
        this.categorylist = response;
      }
    )

  }

  getSubCategoryOptions(categoryId: string) {
	this.subcategoryId = "";
    this.productService.getSubCategories(categoryId).subscribe(
      (response: any) => {
        this.subcategorylist = response;
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
	let cart: CartReq = {
		// TODO: buyerId to be decided
		buyerId: "b13",
		productId: prd.productId,
		productName: prd.productName,
		sellerId: prd.sellerId,
		purchasePrice: prd.currentPrice,
		purchaseNum: 1,
		remarks: "",
		fromDetail: false
	};
	
	this.productService.addToCart(cart).subscribe(
      (response: any) => {
        this.addCartFlag = response;

		if (this.addCartFlag == "2") {
			alert("Product: " + cart.productName + "'s stock is not enough.");
		} else if (this.addCartFlag == "1") {
			alert("Product: " + cart.productName + " has been added to your cart.");
		} else {
			alert("Product: " + cart.productName + " is already in your cart.");
		}
      }

    )
	
  }

  viewDetail(productId: string) {
  	this.router.navigate(['itemdetail'], {queryParams:{'productId': productId}} );
  }


}
