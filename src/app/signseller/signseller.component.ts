import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Seller } from '../seller';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signseller',
  templateUrl: './signseller.component.html',
  styleUrls: ['./signseller.component.css']
})
export class SignsellerComponent implements OnInit {

    sellerId: String;
    sellerName: string;
    password: string;
    companyName: string;
    GSTIN: string;
    companyBrief: string;
    postalAddress: string;
    website: string;
    email: string;
    contactNumber: string;
    sellerIn: any;

  constructor(protected loginService: LoginService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  goAddSeller(): void {

    let seller : Seller = {
    sellerId: this.sellerId,
    sellerName: this.sellerName,
    password: this.password,
    companyName: this.companyName,
    GSTIN: this.GSTIN,
    companyBrief: this.companyBrief,
    postalAddress: this.postalAddress,
    website: this.website,
    email: this.email,
    contactNumber: this.contactNumber
    };

    this.loginService.addSeller(seller).subscribe(
      (response) => {
      this.sellerIn = response;
        if (this.sellerIn.sellerName != null) {
    this.router.navigate(['/']);
          // this.router.navigate(['login']);
        }
      }
    );
}

goBack(): void {
  history.go(-1);
}
}
