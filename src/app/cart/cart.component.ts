import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any='';
  constructor(private menService:MenSubcategoryService) {
 
   }

  ngOnInit(): void {
    this.menService.viewCart().subscribe(data => {
      alert("result"+data);
      console.log(data);
      this.product = data;
    })
  }
  addToCart(id:any){
    
    this.menService.addCart(id).subscribe(data => {
      alert(data);
    })
  }
}
