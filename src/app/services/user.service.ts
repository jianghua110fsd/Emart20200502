import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buyer } from '../buyer';
import { Seller } from '../seller';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentBuyer: any;
  currentSeller: any;

  constructor(protected http: HttpClient) { }

  //Accessing end point for validating the buyer credintionals.
  validateBuyer(username: string, password: string) {
    let credentials = username + ':' + password;
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", credentials);
    return this.http.get("http://localhost:8088/ms-login-service/login/buyer", { headers });
  }

  validateSeller(username: string, password: string) {
    let credentials = username + ':' + password;
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", credentials);
    return this.http.get("http://localhost:8088/ms-login-service/login/seller", { headers });
  }

  addBuyer(buyer: Buyer) {
    return this.http.post("http://localhost:8088/ms-user-service/user/binsert", buyer);
  }

  addSeller(seller: Seller) {
    return this.http.post("http://localhost:8088/ms-user-service/user/sinsert", seller);
  }


  setBuyer(currentBuyer: any) {
    this.currentBuyer = currentBuyer;
  }
  getCurrentBuyer() {
    return this.currentBuyer;
  }
  setSeller(currentSeller: any){
    this.currentSeller = currentSeller;
  }
  getCurrentSeller() {
    return this.currentSeller;
  }
  
}