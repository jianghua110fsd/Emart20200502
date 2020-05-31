import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Searchlist } from '../searchlist';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = Searchlist[+params.get('productID')];
    })}
}
