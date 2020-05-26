import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  // itemList: Product[];

  constructor(protected http: HttpClient) {}

  getSearchlist() {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json')
    //                                   .set('Access-Control-Allow-Headers', 'Content-Type')
    //                                   .set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    //                                   .set('Access-Control-Allow-Origin', '*')
    //                                   .set('Accept', 'application/json');
    // return this.http.get('http://localhost:9200/product/asearch', {headers});
    return this.http.get('http://localhost:9200/product/asearch');
    // const params = new HttpParams().set('prdName', '1');
    // const params = new HttpParams({ fromObject: { prdName: '11'} });
    // return this.http.get('http://localhost:9200/product/search', { params });
    // return this.http.get('http://localhost:9200/product/search?prdName=11');
  }

}
