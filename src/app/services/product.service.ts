import { Injectable } from '@angular/core';
import { Product, PrdSearchCond, CartReq, RemoveCartReq, OrderReq} from '../data.model';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // itemList: Product[];

  constructor(protected http: HttpClient) {}

  searchAll() {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json')
    //                                   .set('Access-Control-Allow-Headers', 'Content-Type')
    //                                   .set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    //                                   .set('Access-Control-Allow-Origin', '*')
    //                                   .set('Accept', 'application/json');
    // return this.http.get('http://localhost:9200/product/asearch', {headers});
    return this.http.get('http://localhost:9200/product/asearch');
    // const params = new HttpParams().set('prdName', '1');
    // const params = new HttpParams({ fromObject: { prdName: '22'} });
    // return this.http.get('http://localhost:9200/product/search', { params });
    // return this.http.get('http://localhost:9200/product/search?prdName=11');
  }

  filter(cond: PrdSearchCond) {
    return this.http.post('http://localhost:9200/product/fsearch', cond);
  }

  addToCart(cart: CartReq) {
    return this.http.post('http://localhost:9300/order/addcart', cart);
  }

  getCartInfo(buyerId: string) {
	const params = new HttpParams().set('buyer', buyerId);
    return this.http.get('http://localhost:9300/order/viewcart', { params });
  }

  removeCartItems(rmCartReq: RemoveCartReq) {
	return this.http.post('http://localhost:9300/order/delcartitem', rmCartReq);
  }

  clearCart(buyerId: string) {
	const params = new HttpParams().set('buyer', buyerId);
	return this.http.get('http://localhost:9300/order/clearcart', { params });
  }

  checkout(ords: Array<OrderReq>) {
	return this.http.post('http://localhost:9300/order/save', ords);
  }

  getBuyerOrders(buyerId: string) {
	const params = new HttpParams().set('buyer', buyerId);
    return this.http.get('http://localhost:9300/order/bsearchall', { params });
  }

  getProductDetail(prdId: string) {
	const params = new HttpParams().set('prdId', prdId);
    return this.http.get('http://localhost:9200/product/searchid', { params });
  }

  getCategories() {
    return this.http.get('http://localhost:9200/product/csearch');
  }

  getSubCategories(categoryId: string) {
	const params = new HttpParams().set('categoryId', categoryId);
    return this.http.get('http://localhost:9200/product/scsearch', { params });
  }

}
