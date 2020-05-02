import { Component, OnInit } from '@angular/core';

import { history } from '../history';
@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
  history = history;
  constructor() { }

  ngOnInit() {
  }

}
