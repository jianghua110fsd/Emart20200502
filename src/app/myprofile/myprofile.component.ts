import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

    MessageArea: String;
    sellerId: String;
    sellerName: string;
    password: string;
    rpassword: string;
    companyName: string;
    gstin: string;
    companyBrief: string;
    postalAddress: string;
    website: string;
    email: string;
    contactNumber: string;
    sellerUpdate: any;

  constructor(protected userService: UserService,
    protected loginService: LoginService,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sellerId = this.loginService.seller.sellerId;
    this.sellerName = this.loginService.seller.sellerName;
    this.companyName = this.loginService.seller.companyName;
    this.gstin = this.loginService.seller.gstin;
    this.companyBrief = this.loginService.seller.companyBrief;
    this.postalAddress = this.loginService.seller.postalAddress;
    this.website = this.loginService.seller.website;
    this.email = this.loginService.seller.email;
    this.contactNumber = this.loginService.seller.contactNumber;
  }
  goUpdate(): void {
    if (this.rpassword != this.password) {
      this.MessageArea = "Re-type password is not same";
    }
    let seller : Seller = {
    sellerId: this.sellerId,
    sellerName: this.sellerName,
    password: this.password,
    companyName: this.companyName,
    gstin: this.gstin,
    companyBrief: this.companyBrief,
    postalAddress: this.postalAddress,
    website: this.website,
    email: this.email,
    contactNumber: this.contactNumber
    };
    this.userService.addSeller(seller).subscribe(
      (response) => {
      this.sellerUpdate = response;
        if (this.sellerUpdate.sellerName != null) {
          this.MessageArea = "update is OK";
        }
      }
    );
}
goBack(): void {
  history.go(-1);
}
}
