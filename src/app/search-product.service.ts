import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  searchProductApi = "http://localhost:3000/user/search-product";

  getSearchResult(text:string){
    return this.http.post<any>(this.searchProductApi,{text:text});
  }
  constructor(private http:HttpClient) { }
}
