import { Component, OnInit } from '@angular/core';
import {WomenSubcategoryService} from '../women-subcategory.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-women-subcategory',
  templateUrl: './women-subcategory.component.html',
  styleUrls: ['./women-subcategory.component.css']
})
export class WomenSubcategoryComponent implements OnInit {
    firstimage:any = '';
  constructor(private womenSub: WomenSubcategoryService,private router:Router) { }

  ngOnInit(): void {
    this.womenSub.subCategoryWomen().subscribe(data=>{
    this.firstimage = data;
    })
  }
  viewProduct(id:any){
    this.router.navigate(['product',id]);
 }
}
