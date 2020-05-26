import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sign: string;
  errorMessage: string;
  username: string;
  password: string;
  currentBuyer: any;
  buyer: boolean;
  currentSeller: any;
  seller: boolean;

  constructor(protected loginService: LoginService,
    private router: Router,
    protected activatedRoute: ActivatedRoute,
    private configService: ConfigService) { }

  ngOnInit() {
    console.log('Login');
    this.configService.isSeller = true;
      this.errorMessage = '';
  }

  toBuyerTop() {
    this.configService.isSeller = false;
    this.router.navigate([`/itemsearch`]);
  }

  toSellerTop() {
    this.configService.isSeller = true;
    this.router.navigate([`/seller-top`]);
  }
  checInput() {
    if (this.sign != 'buyer' && this.sign != 'seller') {
      this.errorMessage = "Please select your roles";
    } else if (this.username.length == 0) {
      this.errorMessage = "Please input your username";
    } else if (this.password.length == 0) {
      this.errorMessage = "Please input your password";
    }

  }
  validate() {
    this.checInput();
    if (this.sign == 'buyer') {
      this.loginService.validateBuyer(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentBuyer = response;
            this.loginService.setBuyer(this.currentBuyer);
            if (this.currentBuyer.buyerName != null) {
              this.router.navigate(['itemsearch']);
            } else {
              this.errorMessage = "Invalid Username/Password for Buyer";
            }
          }
        );
    }

    if (this.sign == 'seller') {
      this.loginService.validateSeller(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentSeller = response;
            this.loginService.setSeller(this.currentSeller);
            if (this.currentSeller.sellerName != null) {
              this.router.navigate(['seller-top']);
            } else {
              this.errorMessage = "Invalid Username/Password for Seller";
            }
          }
        );
    }
  }
  register() {
    if (this.sign != 'buyer' && this.sign != 'seller') {
      this.errorMessage = "Please select your roles";
    } else if (this.sign == 'buyer') {
      this.router.navigate([`/signup`]);
    } else if (this.sign == 'seller') {
      this.router.navigate([`/signseller`]);
    }
  }
}
