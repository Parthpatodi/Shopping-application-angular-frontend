import { Component, OnInit } from '@angular/core';
import {WomenSubcategoryService} from '../women-subcategory.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  men:any = '';
  constructor(private womenService:WomenSubcategoryService,private router:Router) { }

  ngOnInit(): void {
    this.womenService.subCategory().subscribe(data=>{
      this.men = data;
    });
  }
  viewProduct(id:any){
    this.router.navigate(['cart-product-view',id]);
  }
  
}
