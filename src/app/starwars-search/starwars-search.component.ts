import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starwars-search',
  templateUrl: './starwars-search.component.html',
  styleUrls: ['./starwars-search.component.css']
})
export class StarwarsSearchComponent implements OnInit {
  
  searchTerm: string = "";
  headingTerm: string = "";
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(){
    this.http.get(`https://swapi.co/api/${this.headingTerm}/?search=${this.searchTerm}`)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}
