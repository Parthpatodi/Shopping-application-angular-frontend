import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  searchProductApi = "https://vivah-backend-api.herokuapp.com/user/search-product";

  getSearchResult(text:string){
    return this.http.post<any>(this.searchProductApi,{text:text});
  }
  constructor(private http:HttpClient) { }
}
