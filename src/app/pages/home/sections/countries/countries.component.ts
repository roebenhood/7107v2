import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  countries = [
    {id: 'us', name: 'United States of America'},
    {id: 'ca', name: 'Canada'},
    {id: 'gb', name: 'United Kingdom'},
    {id: 'kr', name: 'Korea'},
    {id: 'jp', name: 'Japan'},
    {id: 'hk', name: 'Hongkong'},
    {id: 'cn', name: 'China'},
    {id: 'tw', name: 'Taiwan'},
    {id: 'sa', name: 'Saudi Arabia'},
    {id: 'qa', name: 'Qatar'},
    {id: 'kw', name: 'Kuwait'},
    {id: 'om', name: 'Oman'},
    {id: 'bh', name: 'Bahrain'},
    {id: 'mg', name: 'Madagascar'},
    {id: 'za', name: 'South Africa'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
