import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item:any='';
  constructor(private menService:MenSubcategoryService) {
 
    this.menService.viewCart().subscribe(data => {
      alert(data);
    })
   }

  ngOnInit(): void {
  }
  addToCart(id:any){
    
    this.menService.addCart(id).subscribe(data => {
      alert(data);
    })
  }
}
