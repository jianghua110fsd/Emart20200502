import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CheckoutService} from '../services/checkout.service';
import { Product, CartReq, CartResp } from '../data.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Product;
  productId: string;
  quantity: number;
  addCartFlag: string;

  constructor(private route: ActivatedRoute, private router: Router, 
				private productService: ProductService, private checkoutService: CheckoutService) { }

  ngOnInit() {
	
	this.quantity = 1;
	this.checkoutService.selectItems = [];
	
	this.route.queryParams.subscribe(
		params=>{
			this.productId = params['productId'];
		}
	)
	
	this.productService.getProductDetail(this.productId).subscribe(
      (response: any) => {
        this.item = response;
    })
	
    //this.route.paramMap.subscribe(params => {
      //this.item = searchlist[+params.get('productID')];
    //})}
  }

  addToCart(prd: Product) {
	let cart: CartReq = {
		// TODO: buyerId to be decided
		buyerId: "b13",
		productId: prd.productId,
		productName: prd.productName,
		sellerId: prd.sellerId,
		purchasePrice: prd.currentPrice,
		purchaseNum: this.quantity,
		remarks: "",
		fromDetail: true
	};
	
	this.productService.addToCart(cart).subscribe(
      (response: any) => {
        this.addCartFlag = response;
		if (this.addCartFlag == "2") { 
			alert("Product: " + cart.productName + "'s stock is not enough.");
		} else if (this.addCartFlag == "1") {
			alert("Product: " + cart.productName + " has been added to your cart.");
		} else {
			alert("Product: " + cart.productName + " is already in your cart. Note that purchasing amount was modified.");
		}
      }
    )
  }

  checkout(prd: Product) {
	let chkItem: CartResp = {
		// TODO: buyerId to be decided
		productId: prd.productId,
		productName: prd.productName,
		categoryName: prd.categoryName,
		subcategoryName: prd.subcategoryName,
		sellerId: prd.sellerId,
		unit: prd.unit,
		purchasePrice: prd.currentPrice,
		purchaseNum: this.quantity,
		remarks: "",
		chkFlg: false
	};
	
	this.checkoutService.addCheckoutProduct(chkItem.productId);
	this.checkoutService.addCheckoutItem(chkItem);
	this.checkoutService.setFromItemDtlFlag(true);
	this.router.navigate(['/checkout']);
	
  }
	

}
