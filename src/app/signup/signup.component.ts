import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Buyer } from '../buyer';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  buyerId: string;
  buyerName: string;
  password: string;
  email: string;
  mobileNumber: string;
  postalAddress: string;
  buyerIn: any;

  constructor(protected loginService: LoginService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
  goAdd(): void {

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
