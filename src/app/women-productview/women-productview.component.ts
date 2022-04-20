import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { MenSubcategoryService} from '../men-subcategory.service'
@Component({
  selector: 'app-women-productview',
  templateUrl: './women-productview.component.html',
  styleUrls: ['./women-productview.component.css']
})
export class WomenProductviewComponent implements OnInit {
  item:any= '';
  constructor(private activatedRouter:ActivatedRoute,private menService:MenSubcategoryService) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.menService.product_detail(id).subscribe(data=>{
      window.alert(data);
      this.item = data;
    })

  }
  imageChange(event:any){
     event.src = "this.item.productImageBack";
  }

}
