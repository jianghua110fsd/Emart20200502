import { Component, OnInit } from '@angular/core';

import { searchlist } from '../searchlist';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  searchlist = searchlist;

  constructor() {
  }

  ngOnInit() {
  }

}
