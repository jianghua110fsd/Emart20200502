import { Injectable } from '@angular/core';
import { CartResp } from '../data.model';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  selectProducts: Array<string> = [];
  selectItems: Array<CartResp> = [];
  fromItemDtl: boolean;

  constructor() {}

  addCheckoutProduct(productId: string) {
	this.selectProducts.push(productId);
  }

  addCheckoutItem(item: CartResp) {
	this.selectItems.push(item);
  }

  removeCheckoutItem(index: number) {
	this.selectItems.splice(index, 1)
	//this.selectItems = this.selectItems.filter((ele, index)=>{
        //return ele != item;
    //})
  }

  setSelectedProducts(prds: Array<string>) {
	this.selectProducts = prds;
  }

  setFromItemDtlFlag(flg: boolean) {
	this.fromItemDtl = flg;
  }

}
