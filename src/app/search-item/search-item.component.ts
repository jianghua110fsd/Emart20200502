import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService} from '../services/product.service';
import { Product, PrdSearchCond, CartReq} from '../data.model';
import { LoginService } from '../services/login.service';

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
  priceFrom: any;
  priceTo: any;

  constructor(protected loginService: LoginService,
              protected productService: ProductService,
			  protected router: Router) {
  }

  ngOnInit() {
	this.categoryId = "";
	this.subcategoryId = "";
	this.priceFrom = "";
	this.priceTo = "";
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

  getSubCategoryOptions(seletedIdx: any) {
	var index = 0;
	var categoryId = '';
	var categoryNm = '';
	for (const cat of this.categorylist) {
		if (seletedIdx == index + 1) {
			categoryId = cat.categoryId;
			categoryNm = cat.categoryName;
		}
		
		index ++;
	}

	this.subcategoryId = "";
    this.productService.getSubCategories(categoryId).subscribe(
      (response: any) => {
        this.subcategorylist = response;
      }
    )
  }

  bsearch() {
	
	let reg5:RegExp = new RegExp('^[+|-]?\\d*\\.?\\d*$','i');
	let result1:boolean = true;
	let result2:boolean = true;
	if (this.priceFrom.length > 0) {
		result1 = reg5.test(this.priceFrom);
	}
	if (this.priceTo.length > 0) {
		result2 = reg5.test(this.priceTo);
	}
	//alert(this.priceFrom+':'+result1);
	if(!result1 || !result2) {
		alert("Wrong format for the price input!");
		return;
	}
	
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
		buyerId: this.loginService.buyer.buyerId,
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

  resetFilter() {
	this.keyword = "";
	this.categoryId = "";
	this.subcategoryId = "";
	this.priceFrom = "";
	this.priceTo = "";
	this.subcategorylist = [];
	
  	this.bsearch();
  }


}
