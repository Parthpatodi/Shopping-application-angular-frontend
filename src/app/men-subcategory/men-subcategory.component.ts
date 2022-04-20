import { Component, OnInit } from '@angular/core';
import { MenSubcategoryService } from '../men-subcategory.service';
import { Router } from '@angular/router';
import{ CustomerRegistrationService} from '../customer-registration.service'
@Component({
  selector: 'app-men-subcategory',
  templateUrl: './men-subcategory.component.html',
  styleUrls: ['./men-subcategory.component.css']
})
export class MenSubcategoryComponent implements OnInit {
  men:any = '';
constructor(private menSub: MenSubcategoryService,private router:Router) { }

ngOnInit(): void {
  this.menSub.subCategoryMen().subscribe(data=>{
    window.alert(data);
   this.men = data;
  })
}
 callSubMen(){
  return this.men;
 }
 
 viewProduct(id:any){
    this.router.navigate(['kurta-pajama',id]);
 }
}