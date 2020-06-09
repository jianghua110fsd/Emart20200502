import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../services/product.service';
import { OrderResp } from '../data.model';


//import { history } from '../history';
@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})

export class PurchasehistoryComponent implements OnInit {
	
  searchlist: Array<OrderResp>;

  constructor(protected productService: ProductService) { }


  ngOnInit() {
	this.productService.getBuyerOrders("b13").subscribe(
      (response: any) => {
        this.searchlist = response;
  	})
  }
}
