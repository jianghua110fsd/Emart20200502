import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';
import { reports } from '../reports';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: any;

  constructor(protected loginService: LoginService,
    protected productService: ProductService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let sellerId: any = this.loginService.seller.sellerId;
    this.productService.getReport(sellerId).subscribe(
      (response) => {
      this.reports = response;
        if (this.reports.size != 0) {
          this.router.navigate(['/reports']);
        }
      }
    );
  }

goBack(): void {
  history.go(-1);
}
}
