import { Component, OnInit } from '@angular/core';
import { MenSubcategoryService} from '../men-subcategory.service'
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-men-kurta-pajama',
  templateUrl: './men-kurta-pajama.component.html',
  styleUrls: ['./men-kurta-pajama.component.css']
})
export class MenKurtaPajamaComponent implements OnInit {
  image:any = '';
  constructor(private menService:MenSubcategoryService,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    
    this.menService.product_kurtaP(id).subscribe(data=>{
      window.alert(data);
      this.image = data;
    })
  
  }

}
