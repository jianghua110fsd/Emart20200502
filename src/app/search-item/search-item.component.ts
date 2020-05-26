import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product.service';

// import { searchlist } from '../searchlist';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  // searchlist = searchlist;
  searchlist: any;

  constructor(protected productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getSearchlist().subscribe(
      (response: any) => {
        this.searchlist = response;
      }
    )
  }

}
