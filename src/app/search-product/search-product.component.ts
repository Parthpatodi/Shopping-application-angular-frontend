import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchProductService } from '../search-product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  searchText:string = "";
  searchData:any[] = [];
  constructor(private search:SearchProductService , private router:Router) { }

  ngOnInit(): void {
  }

  getSearchResult(){
      this.search.getSearchResult(this.searchText).subscribe(data => {
        this.searchData = data;
      });
  }

  viewProduct(id:any){
    this.router.navigate(['kurta-pajama',id]);
 }


}
