import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../services/product.service';
import { CheckoutService} from '../services/checkout.service';
import { CartResp, OrderReq } from '../data.model';

//import { orders } from '../orders';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  //orders = orders;
  selectItems: Array<CartResp>;
  ttlAmt: number;
  chkoutItems: Array<OrderReq> = [];
  fromItemDtl: boolean;
  
  constructor(protected checkoutService: CheckoutService,
				protected productService: ProductService,
				protected router: Router) { }

  ngOnInit() {
	this.chkoutItems = [];
    this.ttlAmt = 0;
	this.selectItems = this.checkoutService.selectItems;
	this.fromItemDtl = this.checkoutService.fromItemDtl;
    for (const cartItem of this.selectItems) {
     	this.ttlAmt = this.ttlAmt + cartItem.purchasePrice * cartItem.purchaseNum;
    }
  }

  backToCart() {
	this.router.navigate(['cart'], {queryParams:{'fromChkout': true}} );
  }

  makePayment() {
	
	this.selectItems = this.checkoutService.selectItems;
    for (const cartItem of this.selectItems) {
		let item: OrderReq = {
			// TODO: buyer info to be decided
			buyerId: "b13",
			buyerName: "b13",
			productId: cartItem.productId,
			productName: cartItem.productName,
			sellerId: cartItem.sellerId,
			purchasePrice: cartItem.purchasePrice,
			purchaseNum: cartItem.purchaseNum,
			purchaseAmount: cartItem.purchasePrice*cartItem.purchaseNum,
			// TODO Add page input item for transaction type
			transactionType: "Credit card",
			transactionAmount: this.ttlAmt,
			remarks: "6/1 test"
		};	
	
		this.chkoutItems.push(item);
    }
 	
	this.productService.checkout(this.chkoutItems).subscribe(
      (response: any) => {
		// When deleted count > 0, then let page reload.
        alert("Checkout succeed! Transaction ID is : " + response);
		this.router.navigate(['pchist']);
      })
  }

}
