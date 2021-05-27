import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-dashboard',
  templateUrl: './country-dashboard.component.html',
  styleUrls: ['./country-dashboard.component.scss'],
})
export class CountryDashboardComponent implements OnInit {
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
