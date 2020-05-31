import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Buyer } from '../buyer';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string;
  buyerId: string;
  buyerName: string;
  password: string;
  rpassword: string;
  email: string;
  mobileNumber: string;
  postalAddress: string;
  buyerIn: any;

  constructor(protected loginService: UserService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
  goAdd() {
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

    this.loginService.addBuyer(buyer).subscribe(
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
