import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../data.model';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-item-insert',
  templateUrl: './item-insert.component.html',
  styleUrls: ['./item-insert.component.css']
})
export class ItemInsertComponent implements OnInit {

    massageArea: string;
    productId: string;
    productName: string;
    categoryId: string;
    categoryName: string;
    subcategoryId: string;
    subcategoryName: string;
    description: string;
    unit:  string;
    currentPrice: number;
    currentStock:  number;
    remarks:  string;
    productIn: any;
    productM: any;

  constructor(protected loginService: LoginService,
    protected productService: ProductService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void  {
};
  saveProduce (): void {
    if (this.productId == null) {
      this.massageArea = "Please input your Id";
      return;
    } else if (this.productId.length > 15) {
      this.massageArea = "Your Id is too long";
      return;
    }
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
