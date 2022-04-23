import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service';
import { Router} from '@angular/router';
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
  constructor(private menService:MenSubcategoryService,private router:Router) { }

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
}
