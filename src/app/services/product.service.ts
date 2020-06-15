import { Injectable } from '@angular/core';
import { Product, PrdSearchCond, CartReq, RemoveCartReq, OrderReq} from '../data.model';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // itemList: Product[];

  constructor(protected http: HttpClient) {}

  searchAll() {
    return this.http.get('http://localhost:8088/ms-product-service/product/asearch');
  }

  filter(cond: PrdSearchCond) {
    return this.http.post('http://localhost:8088/ms-product-service/product/fsearch', cond);
  }
  
  saveProduct(product: Product) {
    return this.http.post("http://localhost:8088/ms-product-service/product/save", product);
  }

  addToCart(cart: CartReq) {
    return this.http.post('http://localhost:8088/ms-order-service/order/addcart', cart);
  }
  getSearchlist() {
    return this.http.get("http://localhost:8088/ms-product-service/product/asearch");
  }

  getCartInfo(buyerId: string) {
    const params = new HttpParams().set('buyer', buyerId);
    return this.http.get('http://localhost:8088/ms-order-service/order/viewcart', { params });
  }

  removeCartItems(rmCartReq: RemoveCartReq) {
	return this.http.post('http://localhost:8088/ms-order-service/order/delcartitem', rmCartReq);
  }

  clearCart(buyerId: string) {
	const params = new HttpParams().set('buyer', buyerId);
	return this.http.get('http://localhost:8088/ms-order-service/order/clearcart', { params });
  }

  checkout(ords: Array<OrderReq>) {
	return this.http.post('http://localhost:8088/ms-order-service/order/save', ords);
  }

  getBuyerOrders(buyerId: string) {
	const params = new HttpParams().set('buyer', buyerId);
    return this.http.get('http://localhost:8088/ms-order-service/order/bsearchall', { params });
  }

  getProductDetail(prdId: string) {
	const params = new HttpParams().set('prdId', prdId);
    return this.http.get('http://localhost:8088/ms-product-service/product/searchid', { params });
  }

  getCategories() {
    return this.http.get('http://localhost:8088/ms-product-service/product/csearch');
  }

  getSubCategories(categoryId: string) {
	const params = new HttpParams().set('categoryId', categoryId);
    return this.http.get('http://localhost:8088/ms-product-service/product/scsearch', { params });
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

}
