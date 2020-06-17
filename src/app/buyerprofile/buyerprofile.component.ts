import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Buyer } from '../buyer';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-buyerprofile',
  templateUrl: './buyerprofile.component.html',
  styleUrls: ['./buyerprofile.component.css']
})
export class BuyerprofileComponent implements OnInit {


  errorMessage: string;
  buyerId: string;
  buyerName: string;
  password: string;
  rpassword: string;
  email: string;
  mobileNumber: string;
  postalAddress: string;
  buyerIn: any;

  constructor(protected userService: UserService,
    protected loginService: LoginService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.buyerId = this.loginService.buyer.buyerId;
    this.buyerName = this.loginService.buyer.buyerName;
    this.email = this.loginService.buyer.email;
    this.mobileNumber = this.loginService.buyer.mobileNumber;
    this.postalAddress = this.loginService.buyer.postalAddress;
  }

  goUpdate() {
    if (this.buyerId == null) {
      this.errorMessage = "Please input your Id";
      return;
    } else if (this.buyerId.length > 15) {
      this.errorMessage = "Your Id is too long";
      return;
    } else if (this.rpassword != this.password) {
      this.errorMessage = "Re-type password is not same";
      return;
    }
    let buyer : Buyer = {
      buyerId: this.buyerId,
      buyerName: this.buyerName,
      password: this.password,
      email: this.email,
      mobileNumber: this.mobileNumber,
      postalAddress: this.postalAddress
    };

    this.userService.addBuyer(buyer).subscribe(
      (response) => {
      this.buyerIn = response;
        if (this.buyerIn.buyerName != null) {
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
