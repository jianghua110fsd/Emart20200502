import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-top',
  templateUrl: './seller-top.component.html',
  styleUrls: ['./seller-top.component.css']
})
export class SellerTopComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
goBack(): void {
  history.go(-1);
}

}
