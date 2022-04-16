import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WomenSubcategoryService {
  women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  constructor(private http:HttpClient) { }

  subCategoryWomen(){
    return this.http.get<any>(this.women_subCategory);
  }
 
}
