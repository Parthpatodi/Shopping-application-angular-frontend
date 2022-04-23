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
  check?:any;
  toggle:any='';
  constructor(private customerService:CustomerRegistrationService,private menService:MenSubcategoryService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    
    this.menService.product_kurtaP(id).subscribe(data=>{
      this.image = data;
    })
    this.check = JSON.parse(localStorage.getItem('productItem') || '[]');
    for(let i=0;i<this.check.length;i++){
      console.log(this.check[i]);
    }

    
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
    
    if(event.textContent == "Add to cart"){
      alert("Add to cart To remove to cart change");
      this.menService.addCart(id).subscribe(data=>{
            alert("add to cart");
      event.textContent = "Remove cart";
        console.log(data);
        this.check = true;
        // for(index=0; index< result.length; index++)
        // result[index].productQty = 1;
     // localStorage.setItem("item-list",JSON.stringify(data.productList[this.i++].productName));

    //  localStorage.setItem("productItem", JSON.stringify(this.names));
      })
    }
    else{
       this.menService.removeCart(id).subscribe(data=>{
     alert("remove to cart");
       event.textContent = "Add to cart";
       })
    }
      //       this.names[this.i++] = id;
      //       alert("add from cart");
      //       event.disabled = true;
      //       localStorage.setItem("productItem", JSON.stringify(this.names));
      //     event.textContent = "Remove to cart
    // this.menService.addCart(id).subscribe(data=>{
    //        alert("add to cart");// })

  //   if(this.isLoggedIn()){
  //     if(event.textContent == "Add to cart"){
  //       this.names[this.i++] = id;
  //       alert("add from cart");
  //       event.disabled = true;
  //       localStorage.setItem("productItem", JSON.stringify(this.names));
  //     event.textContent = "Remove to cart"
   
   
  }
  else{
    alert("First login required");
    this.router.navigate(['signIn']);
  }
}
}