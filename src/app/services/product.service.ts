import { Injectable } from '@angular/core';
import { Product, PrdSearchCond, Cart} from '../data.model';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Searchlist } from '../searchlist';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUp: any;

  constructor(protected http: HttpClient) {}

  saveProduct(product: Product) {
    return this.http.post("http://localhost:8088/ms-product-service/product/save", product);
  }


  getSearchlist() {
    return this.http.get("http://localhost:8088/ms-product-service/product/asearch");
  }

  getReport(sellerId: string): any {
    return this.http.get("http://localhost:8088/ms-order-service/order/ssearchall?seller=" +  sellerId);
  }

  getProduct(prdId: string): any {
    return this.http.get("http://localhost:8088/ms-product-service/product/searchid?prdId=" +  prdId);
  }

  doDelete(prdId: string): any{
    return this.http.get("http://localhost:8088/ms-product-service/product/delete?prdId=" +  prdId);
  }

  filter(cond: PrdSearchCond) {
    return this.http.post("http://localhost:8088/ms-product-service/product/fsearch", cond);
  }

  addToCart(cart: Cart) {
    return this.http.post("http://localhost:8088/ms-order-service/order/addcart", cart);
  }

  getCartInfo(buyerId: string) {
	const params = new HttpParams().set('buyer', buyerId);
    return this.http.get("http://localhost:8088/ms-order-service/order/viewcart", { params });
  }
}
