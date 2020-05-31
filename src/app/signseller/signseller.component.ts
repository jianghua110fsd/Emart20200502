import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Seller } from '../seller';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signseller',
  templateUrl: './signseller.component.html',
  styleUrls: ['./signseller.component.css']
})
export class SignsellerComponent implements OnInit {
    errorMessage: String;
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
    sellerIn: any;

  constructor(protected userService: UserService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  goAddSeller(): void {

    if (this.sellerId == null) {
      this.errorMessage = "Please input your Id";
      return;
    } else if (this.sellerId.length > 15) {
      this.errorMessage = "Your Id is too long";
      return;
    } else if (this.rpassword != this.password) {
      this.errorMessage = "Re-type password is not same";
      return;
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
