import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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
 wishList = 'https://vivah-backend-api.herokuapp.com/wishList/view-wish-list';
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

  public responseCache = new Map();

  public createOrder(amount:any){
   return this.http.post<any>(this.orderApi,{amount});
  }


  subCategoryMen(){
    const menCategoryCache = this.responseCache.get(this.Men_subcategory)
    if(menCategoryCache){
      return of(menCategoryCache)
    }
    const response = this.http.get<any>(this.Men_subcategory);
    response.subscribe(menCategory => this.responseCache.set(this.Men_subcategory,menCategory));
    return response;
    }


  productMen(){
    const menProductCache = this.responseCache.get(this.Men_Product)
    if(menProductCache){
      return of(menProductCache)
    }
    const response = this.http.get<any>(this.Men_Product);
    response.subscribe(menProduct => this.responseCache.set(this.Men_Product,menProduct));
    return response;
  }


  product_kurtaP(id:any){
    const kurtaPajamaCache = this.responseCache.get(this.kurtaPajama+id)
    if(kurtaPajamaCache){
      return of(kurtaPajamaCache)
    }
    const response = this.http.get<any>(this.kurtaPajama+id);
    response.subscribe(kurta => this.responseCache.set(this.kurtaPajama+id,kurta));
    return response;
  }


  product_detail(id:any){
    const descOfProduct = this.responseCache.get(this.product_details+id);
    if(descOfProduct){
      return descOfProduct;
    }
    const response = this.http.get<any>(this.product_details+id);
    response.subscribe(description => this.responseCache.set(this.product_details+id,description));
    return response;
  }
    
  addCart(product:any){
    return this.http.post<any>(this.addToCart,{
      productId:product
    });
  }
  viewCart(){
    const viewCartCache = this.responseCache.get(this.view);
    if(viewCartCache){
      return viewCartCache;
    }
    const response = this.http.get<any>(this.view);
    response.subscribe(cartView => this.responseCache.set(this.view,cartView));
    return response; 

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
    const wishlistCache = this.responseCache.get(this.wishList);
    if(wishlistCache){
      return wishlistCache;
    }
    const response = this.http.get<any>(this.wishList);
    response.subscribe(wishes => this.responseCache.set(this.wishList,wishes));
    return response;
    }
  
  sortingWithPrice(id:any){
    return this.http.get<any>(this.sortPrice+id);
  }
  sortHighToLow(id:any){
    return this.http.get<any>(this.sortHighPrice+id);
  }

    

}
