import { Component, OnInit } from '@angular/core';
import {WomenSubcategoryService} from '../women-subcategory.service'
@Component({
  selector: 'app-women-subcategory',
  templateUrl: './women-subcategory.component.html',
  styleUrls: ['./women-subcategory.component.css']
})
export class WomenSubcategoryComponent implements OnInit {
    firstimage:any = '';
  constructor(private womenSub: WomenSubcategoryService) { }

  ngOnInit(): void {
    this.womenSub.subCategoryWomen().subscribe(data=>{
 this.firstimage = data;
    })
  }
  //  callSubWomen(){
  //   return this.firstimage;
  //  }
}
