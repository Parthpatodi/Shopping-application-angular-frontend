import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenSubcategoryService {
  // Men_subcategory = 'https://vivah-backend.herokuapp.com/subcategory/subcategoryList';
  product_details="https://vivah-backend-api.herokuapp.com/product/product-details/";
 kurtaPajama = "https://vivah-backend-api.herokuapp.com/product/byProduct/";
 Men_subcategory='https://vivah-backend-api.herokuapp.com/subcategory/bySubCategory/625aa8d0d7d40b24a87428fb';
  // Men_Product='https://vivah-backend.herokuapp.com/product/byProduct/625abdd5587e57bb3a74a3f5';

 addToWishList = 'https://vivah-backend-api.herokuapp.com/wishList/add-to-wishlist';
 wishList = 'http://localhost:3000/wishList/view-wish-list';
  deleteWishes = "https://vivah-backend-api.herokuapp.com/wishList/delete-from-wishList";
//  Men_Product='https://vivah-backend-api.herokuapp.com/product/product-list';
//  order = "https://vivah-backend-api.herokuapp.com/order/place-order";
 addToCart = 'https://vivah-backend-api.herokuapp.com/cart/add-to-cart';
 removeToCart = 'https://vivah-backend-api.herokuapp.com/cart/remove-from-cart';
 view = "https://vivah-backend-api.herokuapp.com/cart/view-carts";
 Men_Product='https://vivah-backend-api.herokuapp.com/product/product-list';
 order = "https://vivah-backend-api.herokuapp.com/order/place-order";
 deleteCart = "https://vivah-backend-api.herokuapp.com/cart/delete-carts/";
  orderApi = 'https://vivah-backend-api.herokuapp.com/order/pay';

  sortPrice = 'https://vivah-backend-api.herokuapp.com/product/sort-price/';
  sortHighPrice = 'https://vivah-backend-api.herokuapp.com/product/price-high/';
//  addToCart = 'http://localhost:3000/cart/add-to-cart';
//  removeToCart = 'http://localhost:3000/cart/remove-from-cart';
//  view = "http://localhost:3000/cart/view-carts";
//  Men_Product='http://localhost:3000/product/product-list';
//  order = "http://localhost:3000/order/place-order";
//  deleteCart = "http://localhost:3000/cart/delete-carts";

  constructor(private http:HttpClient) { }

  public createOrder(amount:any){
   return this.http.post<any>(this.orderApi,{amount});
  }
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
      productId:product
    });
  }
  viewCart(){
    return this.http.get<any>(this.view);

  }
  removeCart(product:any){
    return this.http.post<any>(this.removeToCart,{
      productId:product
    });
  }
  removeWish(product:any){
    return this.http.post<any>(this.deleteWishes,{
      productId:product
    });
  }

  orderPlaced(total:any,address:any,mobile:any,shipping:any,payment:any,orderItem:any){
    return this.http.post<any>(this.order,{
      total: total,
      address: address,
      mobile: mobile,
      shipping: shipping,
      payment: payment,
      orderList: orderItem
    });
  }
  delCart(){
    return this.http.post<any>(this.deleteCart,{});
  }
  addWishList(product:any){
    return this.http.post<any>(this.addToWishList,{
      productId:product
    });
  }
  viewWishes(){
    return this.http.get<any>(this.wishList);
  }
  sortingWithPrice(id:any){
    return this.http.get<any>(this.sortPrice+id);
  }
  sortHighToLow(id:any){
    return this.http.get<any>(this.sortHighPrice+id);
  }
}
