import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../data.model';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-item-maitenance',
  templateUrl: './item-maitenance.component.html',
  styleUrls: ['./item-maitenance.component.css']
})
export class ItemMaitenanceComponent implements OnInit {

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

	categorylist: any;
	subcategorylist: any;
	
  constructor(
    protected loginService: LoginService,
    protected productService: ProductService,
    private router: Router,
    protected activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
	// Get category list
	this.productService.getCategories().subscribe(
      (response: any) => {
        this.categorylist = response;
      }
    )

	// Get product info
    this.activatedRoute.paramMap.subscribe(params => {
      let productId: any = params.get('productId');
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
 	
			// Sub categories
			if (this.categoryId.length > 0) {
				this.productService.getSubCategories(this.categoryId).subscribe(
			      (response: any) => {
			        this.subcategorylist = response;
			      }
			    )
			}
			
          }
        }
      );
    })

  }

  getSubCategoryOptions(seletedIdx: any) {
	if (seletedIdx == 0) {
		this.categoryId = "";
		this.categoryName = "";
		this.subcategoryId = "";
		this.subcategoryName = "";
		this.subcategorylist = [];
		return;
	}
	
	var index = 0;
	for (const cat of this.categorylist) {
		if (seletedIdx == index + 1) {
			this.categoryId = cat.categoryId;
			this.categoryName = cat.categoryName;
		}
		
		index ++;
	}

	this.subcategoryId = "";
	this.subcategoryName = "";
    this.productService.getSubCategories(this.categoryId).subscribe(
      (response: any) => {
        this.subcategorylist = response;
      }
    )
  }

  setSubCategoryInfo(seletedIdx: any) {
	if (seletedIdx == 0) {
		this.subcategoryId = "";
		this.subcategoryName = "";
		return;
	}
	
	var index = 0;
	for (const cat of this.subcategorylist) {
		if (seletedIdx == index + 1) {
			this.subcategoryId = cat.scPk.subcategoryId
			this.subcategoryName = cat.subcategoryName;
		}
		
		index ++;
	}

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
