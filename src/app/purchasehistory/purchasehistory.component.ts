import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../services/product.service';
import { OrderResp } from '../data.model';
import { LoginService } from '../services/login.service';


//import { history } from '../history';
@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})

export class PurchasehistoryComponent implements OnInit {
	
  searchlist: Array<OrderResp>;

  constructor(protected loginService: LoginService,
       protected productService: ProductService) { }


  ngOnInit() {
	this.productService.getBuyerOrders(this.loginService.buyer.buyerId).subscribe(
      (response: any) => {
        this.searchlist = response;
  	})
  }
}
