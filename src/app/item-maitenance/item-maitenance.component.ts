import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-item-maitenance',
  templateUrl: './item-maitenance.component.html',
  styleUrls: ['./item-maitenance.component.css']
})
export class ItemMaitenanceComponent implements OnInit {

    massageArea: String;
    productId: String;
    productName: String;
    categoryId: String;
    categoryName: String;
    subcategoryId: String;
    subcategoryName: String;
    description: String;
    unit:  String;
    currentPrice: Number;
    currentStock:  Number;
    remarks:  String;
    productIn: any;
    productM: any;

  constructor(
    protected loginService: LoginService,
    protected productService: ProductService,
    private router: Router,
    protected activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let productId: any = params.get('prdId');
      this.productService.getProduct(productId).subscribe(
        (response: any) => {
          this.productM = response;
          if (this.productM != null) {
            this.productId = this.productM.productId;
            this.productName = this.productM.productName;
            this.categoryId = this.productM.categoryId;
            this.categoryName = this.productM.categoryName;
            this.subcategoryId = this.productM.subcategoryId;
            this.subcategoryName = this.productM.subcategoryName;
            this.description = this.productM.description;
            this.unit = this.productM.unit;
            this.currentPrice = this.productM.currentPrice;
            this.currentStock = this.productM.currentStock;
            this.remarks = this.productM.remarks;
          }
        }
      );
  })
}
  saveProduce (): void {
    let product : Product = {
    productId: this.productId,
    productName: this.productName,
    categoryId: this.categoryId,
    categoryName: this.categoryName,
    subcategoryId: this.subcategoryId,
    subcategoryName: this.subcategoryName,
    sellerId: this.loginService.seller.sellerId,
    description: this.description,
    unit:  this.unit,
    currentPrice: this.currentPrice,
    currentStock:  this.currentStock,
    remarks:  this.remarks,
    };
    this.productService.saveProduct(product).subscribe(
      (response) => {
      this.productIn = response;
        if (this.productIn.productName != null) {
          this.router.navigate(['/item-list']);
        }
      }
    );
  }

goBack(): void {
  history.go(-1);
}
}
