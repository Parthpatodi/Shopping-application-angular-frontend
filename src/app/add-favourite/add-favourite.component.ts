import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service';
import { Router} from '@angular/router';

import { CustomerRegistrationService} from  '../customer-registration.service' ;
@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {
  product:any='';
  in:number=0;
  email:any='';
  address:any='';
  contactNumber:any='';
  total:any='';
  mobile:any='';
  shipping:any='';
  payment:any='';
  orderItem:any='';
  constructor(private customerService:CustomerRegistrationService,private menService:MenSubcategoryService,private router:Router) { }

  ngOnInit(): void {
      this.menService.viewWishes().subscribe(data => {
        alert("result"+data);
        console.log(data);
        this.product = data;
        
      })
  }
  delete(id:any,index:number){
    this.menService.removeWish(id).subscribe(data=>{
      alert("remove to wish");
      this.product.productList.splice(index,1);
      this.router.navigate(['add-favourite']);
     })
 
  }
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }
  addToCart(id:any,index:number){

    if(this.isLoggedIn()){
      this.menService.addCart(id).subscribe(data=>{
            alert("add to cart");
        console.log(data);
        this.menService.removeWish(id).subscribe(data=>{
          alert("remove to wish");
          this.product.productList.splice(index,1);
          this.router.navigate(['add-favourite']);
         })
     
      })
    }
  else{
    alert("First login required");
    this.router.navigate(['signIn']);
  }
}
}
