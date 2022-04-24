import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WomenSubcategoryService {
  //  women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  women_subCategory = 'https://vivah-backend-api.herokuapp.com/subcategory/bySubCategory/625aa923d7d40b24a87428fc';
  allCategory = 'http://localhost:3000/product/sort';
  //women_subCategory='https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa923d7d40b24a87428fc'
  //women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/subcategoryList';
  constructor(private http:HttpClient) { }
  id = '625aa923d7d40b24a87428fc';

  public responseCache = new Map();

  subCategoryWomen(){
    const womenCategoryCache = this.responseCache.get(this.women_subCategory);
    if(womenCategoryCache){
      return womenCategoryCache;
    }
    const response = this.http.get<any>(this.women_subCategory);
    response.subscribe(womanCategory => this.responseCache.set(this.women_subCategory,womanCategory));
    return response; 
  }

  subCategory(){
    const subCategoryCache = this.responseCache.get(this.allCategory);
    if(subCategoryCache){
      return subCategoryCache;
    }
    const response = this.http.get<any>(this.allCategory);
    response.subscribe(allCategories => this.responseCache.set(this.allCategory,allCategories));
    return response;
  }

}
