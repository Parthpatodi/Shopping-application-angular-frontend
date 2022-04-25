import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WomenSubcategoryService {
  //  women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  women_subCategory = 'https://vivah-backend-api.herokuapp.com/subcategory/bySubCategory/625aa923d7d40b24a87428fc';
  allCategory = 'https://vivah-backend-api.herokuapp.com/product/sort';
  //women_subCategory='https://vivah-backend.herokuapp.com/subcategory/bySubCategory/625aa923d7d40b24a87428fc'
  //women_subCategory = 'https://vivah-backend.herokuapp.com/subcategory/subcategoryList';
  view_Profile = "http://localhost:3000/user/view-profile";
   edit_Profile =  "http://localhost:3000/user/edit-user";
   order = "http://localhost:3000/order/order-view";
  constructor(private http:HttpClient) { }
  id = '625aa923d7d40b24a87428fc';
  subCategoryWomen(){
    return this.http.get<any>(this.women_subCategory);
  }

  subCategory(){
    return this.http.get<any>(this.allCategory);
  }
  profile(){
    return this.http.get<any>(this.view_Profile);
  }
  editProfile(name:any,email:any,address:any,mobile:any){
    return this.http.post<any>(this.edit_Profile,{
      name:name,
      email:email,
      address:address,
      mobile:mobile
    });
  }
  orderhist(){
    return this.http.get<any>(this.order);
  }

}
