import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Searchlist } from '../searchlist';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';
import { Product } from '../data.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  productlist: any;
  massageArea: string;

  constructor(protected loginService: LoginService,
    protected productService: ProductService,
    private router: Router,
    protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.productService.getSearchlist().subscribe(
      (response) => {
      this.productlist = response;
        if (this.productlist.size != 0) {
          this.router.navigate(['/item-list']);
        }
      }
    );
  }

  goUpdate(prdId: String): void {
    this.router.navigate(['/item-maitenance/' + prdId]);
  }

  doDelete(prdId: String): void {
      let productId: any = prdId;
    this.productService.doDelete(productId).subscribe(
      (response) => {
      if(response == "1") {
          this.massageArea = "Delete is success"
          this.productService.getSearchlist().subscribe(
            (response) => {
            this.productlist = response;
              if (this.productlist.size != 0) {
                this.router.navigate(['/item-list']);
              }
            }
          );
      } else {
          this.massageArea = "Delete is failed"
      }
  });
}
  goBack(): void {
    history.go(-1);
  }
}