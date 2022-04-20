import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WomenSubcategoryService {
  //  women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  women_subCategory = 'http://localhost:3000/subcategory/bySubCategory/625aa923d7d40b24a87428fc';
  allCategory = 'http://localhost:3000/product/sort';
  //women_subCategory='https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa923d7d40b24a87428fc'
  //women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/subcategoryList';
  constructor(private http:HttpClient) { }
  id = '625aa923d7d40b24a87428fc';
  subCategoryWomen(){
    return this.http.get<any>(this.women_subCategory);
  }
  subCategory(){
    return this.http.get<any>(this.allCategory);
  }
 
}
