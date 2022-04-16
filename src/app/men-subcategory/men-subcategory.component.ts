import { Component, OnInit } from '@angular/core';
import { MenSubcategoryService } from '../men-subcategory.service';

@Component({
  selector: 'app-men-subcategory',
  templateUrl: './men-subcategory.component.html',
  styleUrls: ['./men-subcategory.component.css']
})
export class MenSubcategoryComponent implements OnInit {
  men:any = '';
constructor(private menSub: MenSubcategoryService) { }

ngOnInit(): void {
  this.menSub.subCategoryMen().subscribe(data=>{
  
   this.men = data;
  })
}
 callSubMen(){
  return this.men;
 }
}