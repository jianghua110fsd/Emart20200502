import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { UserService } from '../services/user.service';
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
  okFlg: boolean;

  constructor(protected userService: UserService,
    protected loginService: LoginService,
    private router: Router,
    protected activatedRoute: ActivatedRoute,
    private configService: ConfigService) { }

  ngOnInit() {
    console.log('Login');
	this.username = '';
	this.password = '';
	this.okFlg = true;
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
      this.errorMessage = "Please select your role";
	  this.okFlg = false;
	  return;
    } else if (this.username.length == 0) {
      this.errorMessage = "Please input your username";
	  this.okFlg = false;
	  return;
    } else if (this.password.length == 0) {
      this.errorMessage = "Please input your password";
	  this.okFlg = false;
	  return;
    }

	this.okFlg = true;
  }

  validate() {
    this.checInput();
	// when error occurs
    if (!this.okFlg) {
		return;
    }

    if (this.sign == 'buyer') {
      this.userService.validateBuyer(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentBuyer = response;
            this.userService.setBuyer(this.currentBuyer);
            if (this.currentBuyer.buyerName != null) {
              this.loginService.loginBuyer(this.currentBuyer);
              // this.router.navigate(['itemsearch']);
			  this.toBuyerTop();
            } else {
              this.errorMessage = "Invalid Username/Password for Buyer";
            }
          }
        );
    }

    if (this.sign == 'seller') {
      this.userService.validateSeller(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentSeller = response;
            this.userService.setSeller(this.currentSeller);
            if (this.currentSeller.sellerName != null) {
              this.loginService.loginSeller(this.currentSeller);
              //this.router.navigate(['seller-top']);
			  this.toSellerTop();
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
