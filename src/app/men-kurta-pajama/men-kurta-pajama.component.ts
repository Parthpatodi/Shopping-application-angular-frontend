import { Component, OnInit } from '@angular/core';
import { MenSubcategoryService} from '../men-subcategory.service'
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { CustomerRegistrationService} from  '../customer-registration.service' ;
@Component({
  selector: 'app-men-kurta-pajama',
  templateUrl: './men-kurta-pajama.component.html',
  styleUrls: ['./men-kurta-pajama.component.css']
})
export class MenKurtaPajamaComponent implements OnInit {
  image:any = '';
  names:any = [];
  i =0;
  id:any =0;
  check1?:any;
  check?:any;
  toggle:any='';
  highToLow:any = '';
  product:any = '';
  constructor(private customerService:CustomerRegistrationService,private menService:MenSubcategoryService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');

    this.menService.product_kurtaP(this.id).subscribe(data=>{
      this.image = data;
    })
    this.check = JSON.parse(localStorage.getItem('productItem') || '[]');
    for(let i=0;i<this.check.length;i++){
      console.log(this.check[i]);
    }


  }
  sortPriceWithHigh(){
    this.menService.sortHighToLow(this.id).subscribe(data=>{
      console.log(data);
      //  alert(data);
       this.highToLow = data;
    })
   }
   sortWithSort(){
     this.menService.sortingWithPrice(this.id).subscribe(data=>{
       console.log(data);
        this.product = data;
     })
   }
  add(id:any){
    this.router.navigate(['cart-product-view',id]);
  }
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }
  addToCart(id:any,event: any){
    console.log(event);
    if(this.isLoggedIn()){
      // this.check1 = localStorage.getItem('addCart');
      // console.log(this.check1);
      // if(id==this.check1){

    if(event.textContent == "Add To Cart"){
      this.menService.addCart(id).subscribe(data=>{
            alert("add to cart");
            localStorage.setItem("addCart",data._id)
      event.textContent = "Remove cart";
        console.log(data);
      })
    }
    else{
       this.menService.removeCart(id).subscribe(data=>{
     alert("remove to cart");
       event.textContent = "Add To Cart";
       })
    }
  }
  // else{
  //   alert("already added");
  // }

  else{
    alert("First login required");
    this.router.navigate(['signIn']);
  }
}
addToWishList(id:any,event: any){
  console.log(event);
  if(this.isLoggedIn()){

  if(event.textContent == "Add To Wishlist"){
    alert("Add to cart To remove to cart change");
    this.menService.addWishList(id).subscribe(data=>{
          alert("add to cart");
    event.textContent = "Favourite";
      console.log(data);
      this.check = true;
    })
  }
  else{
     this.menService.removeCart(id).subscribe(data=>{
   alert("remove to cart");
     event.textContent = "Add To Wishlist";
     })
  }
}
else{
  alert("First login required");
  this.router.navigate(['signIn']);
}
}


}
