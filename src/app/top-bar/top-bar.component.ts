import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  userId: any;

  constructor(
    private router: Router,
    protected loginService: LoginService) { }

  ngOnInit() {
    this.userId = this.loginService.seller.sellerId;
  }

logout(): void {
  this.loginService.logout();
  this.router.navigate(['/']);
}
}

