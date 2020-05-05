import { Component, OnInit } from '@angular/core';

import { reports } from '../reports';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports = reports;
  constructor() { }

  ngOnInit(): void {
  }

goBack(): void {
  history.go(-1);
}
}
