import { Component, OnInit } from '@angular/core';
import { MenSubcategoryService} from '../men-subcategory.service'
@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.css']
})
export class MenProductComponent implements OnInit {
  firstimage:any = '';
  constructor(private menSub:  MenSubcategoryService) { }
  ngOnInit(): void {
    this.menSub.productMen().subscribe(data=>{
   this.firstimage = data;
    })
  }
   callSubWomen(){
    return this.firstimage;
   }
}
