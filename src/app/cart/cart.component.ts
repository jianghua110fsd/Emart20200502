import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../services/product.service';
import { CheckoutService} from '../services/checkout.service';
import { CartResp, RemoveCartReq} from '../data.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  searchlist: Array<CartResp>;
  hasres: boolean;
  selectProducts: Array<string> = [];
  // Back from Checkout page flag
  fromChkout: boolean;

  constructor(protected loginService: LoginService,
              protected productService: ProductService,
			  private router: Router,
			  private route: ActivatedRoute,
			  protected checkoutService: CheckoutService) { }

  ngOnInit() {
	
	// Judge if it was backing from checkout page
	this.route.queryParams.subscribe(
		params=>{
			this.fromChkout = params['fromChkout'];
		}
	)
	//this.fromChkout = this.route.snapshot.params['fromChkout'];
	
	// Reset flag
	this.checkoutService.setFromItemDtlFlag(false);
	this.productService.getCartInfo(this.loginService.buyer.buyerId).subscribe(
      (response: any) => {
        this.searchlist = response;

		// When there's any cart item shown, show [Clear cart], else hide this button
		if (this.searchlist.length > 0) {
			this.hasres = true;
		} else {
			this.hasres = false;
			return;
		}
		
		// When back from checkout page, keep the selected items checked
		if (this.fromChkout) {
			this.selectProducts = this.checkoutService.selectProducts;
			for (const chkItem of this.checkoutService.selectItems) {
				//this.selectProducts.push(chkItem.productId);
				for (const item of this.searchlist) {
					if (item.productId == chkItem.productId) {
						item.chkFlg = true;
						break;
					}	
				}
		    }
		} else {
			// When not backing from Checkout page, clear checkout items
			this.checkoutService.selectProducts = [];
			this.checkoutService.selectItems = [];
		}
		
		
      }
    )

  }

  selectCheckbox(check: boolean, item: CartResp) {
	
	// 先判断选中的数组里面是否包括当前值
    var index:number = this.selectProducts.indexOf(item.productId);
	
    //当前选择的就追加否则就移除
    if(check){
      	if(index < 0){
      		this.selectProducts.push(item.productId);
			this.checkoutService.addCheckoutItem(item);
    	}
  	} else {
    	if(index > -1){
      		this.selectProducts = this.selectProducts.filter((ele, index)=>{
        		return ele != item.productId;
      		})

			//alert(this.checkoutService.selectItems.length);
			//alert(index);
			this.checkoutService.removeCheckoutItem(index);
			//alert(this.checkoutService.selectItems.length);
    	}
  	}
	
  }

  removeItems() {
	
	// Reset params prepared for Checkout page 
	this.checkoutService.selectProducts = [];
	this.checkoutService.selectItems = [];
	
	if (this.selectProducts.length < 1) {
		alert("No item selected!");
		return;
	}
	
	let rmItems: RemoveCartReq = {
		buyerId: this.loginService.buyer.buyerId,
		productIds: this.selectProducts
		
	};
	
	this.productService.removeCartItems(rmItems).subscribe(
      (response: any) => {
		// When deleted count > 0, then let page reinit.
        if (response >= 0) {
			this.productService.getCartInfo(this.loginService.buyer.buyerId).subscribe(
      		(response: any) => {
        		this.searchlist = response;
				this.selectProducts = [];
				
				// When there's any cart item left, show [Clear cart], else hide this button
				if (this.searchlist.length > 0) {
					this.hasres = true;
				} else {
					this.hasres = false;
				}
      		})		
		}
      })
  }

  clearCart() {
	
	this.productService.clearCart(this.loginService.buyer.buyerId).subscribe(
      (response: any) => {
		// When deleted count > 0, then let page reload.
        if (response >= 0) {
			this.productService.getCartInfo(this.loginService.buyer.buyerId).subscribe(
      		(response: any) => {
        		this.searchlist = response;
				this.selectProducts = [];
				this.hasres = false;
      		})		
		}
      })
  }

  viewDetail(productId: string) {
  	this.router.navigate(['itemdetail'], {queryParams:{'productId': productId}} );
  }

  checkout() {
	
	if (this.selectProducts.length < 1) {
		alert("Please select the items you want to checkout!");
		return;
	}
	
	this.checkoutService.setSelectedProducts(this.selectProducts);
	this.router.navigate(['/checkout']);
  }

}
