import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ConfigService} from './services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'E-Mart';
  isSeller: boolean;
  reqPathSub: Subscription;
  reqPathStr: string;

  constructor(private router: Router,  private configService: ConfigService ) { }

  ngOnInit() {
  }

  logout() {
    this.configService.isSeller = true;
    this.router.navigate([`/login`]);
  }
}