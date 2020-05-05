import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfigService} from '../services/config.service';


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

  constructor( private router: Router, private configService: ConfigService ) { }

  ngOnInit() {
    console.log('Login');
    this.configService.isSeller = true;
  }

  toBuyerTop() {
    this.configService.isSeller = false;
    this.router.navigate([`/itemsearch`]);
  }

  toSellerTop() {
    this.configService.isSeller = true;
    this.router.navigate([`/seller-top`]);
  }
}
