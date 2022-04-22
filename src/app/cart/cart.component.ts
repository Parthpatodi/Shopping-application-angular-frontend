import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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
  constructor(private menService:MenSubcategoryService,private router:Router) {
 
   }

  ngOnInit(): void {
    this.menService.viewCart().subscribe(data => {
      alert("result"+data);
      console.log(data);
      this.product = data;
      localStorage.setItem('order-item', JSON.stringify(this.product.productList));
    })
  }
  addToCart(id:any){
    
    this.menService.addCart(id).subscribe(data => {
      alert(data);
    })
  }
  delete(id:any,index:number){
    this.menService.removeCart(id).subscribe(data=>{
      alert("remove to cart");
      this.product.productList.splice(index,1);
      this.router.navigate(['add-cart']);
     })
 
  }
  edit(id:any,index:number){
    //this.router.navigate(['add-cart']);
  }
  checkOut(){
    this.orderItem = localStorage.getItem('order-item');

     this.menService.orderPlaced(this.total,this.address,this.mobile,this.shipping,this.payment,this.orderItem).subscribe(data=>{
      alert("order placed"); 

      this.menService.delCart().subscribe(data=>{
        alert("cart deleted");
      })
     })
  }
}
