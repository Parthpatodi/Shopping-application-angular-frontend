import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenSubcategoryService {
  // Men_subcategory = 'https://vivah-backend.herokuapp.com/subcategory/subcategoryList';

  Men_subcategory='http://localhost:3000/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  // Men_Product='https://vivah-backend.herokuapp.com/product/byProduct/625abdd5587e57bb3a74a3f5';
 Men_Product='https://vivah-backend.herokuapp.com/product/product-list';
  constructor(private http:HttpClient) { }

  subCategoryMen(){
    return this.http.get<any>(this.Men_subcategory);
  }
  productMen(){
    return this.http.get<any>(this.Men_Product);
  }
  
}
