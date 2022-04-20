import { Component, OnInit } from '@angular/core';
import { SearchProductService } from '../search-product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 searchText:string = "";
  constructor(private search : SearchProductService ) { }

  ngOnInit(): void {
  }

  getSearchResult(){
    this.search.getSearchResult(this.searchText).subscribe(data => {
      this.searchText = data;
    });
  }
}
