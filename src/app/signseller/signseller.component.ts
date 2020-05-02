import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signseller',
  templateUrl: './signseller.component.html',
  styleUrls: ['./signseller.component.css']
})
export class SignsellerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
goBack(): void {
  history.go(-1);
}
}
