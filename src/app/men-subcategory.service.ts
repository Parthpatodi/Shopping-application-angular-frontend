import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenSubcategoryService {
  // Men_subcategory = 'https://vivah-backend.herokuapp.com/subcategory/subcategoryList';
  product_details="http://localhost:3000/product/product-details/";
 kurtaPajama = "http://localhost:3000/product/byProduct/";
 Men_subcategory='http://localhost:3000/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  // Men_Product='https://vivah-backend.herokuapp.com/product/byProduct/625abdd5587e57bb3a74a3f5';
 addToCart = 'http://localhost:3000/cart/add-to-cart';
 view = "http://localhost:3000/cart/view-cart";
 Men_Product='http://localhost:3000/product/product-list';
  constructor(private http:HttpClient) { }

  subCategoryMen(){
    return this.http.get<any>(this.Men_subcategory);
  }
  productMen(){
    return this.http.get<any>(this.Men_Product);
  }
  product_kurtaP(id:any){
    return this.http.get<any>(this.kurtaPajama+id);
  }
  product_detail(id:any){
    return this.http.get<any>(this.product_details+id);
  }
  addCart(product:any){
    return this.http.post<any>(this.addToCart,{
      productList:product
    });
  }
  viewCart(){
    return this.http.get<any>(this.view);

  }
}
