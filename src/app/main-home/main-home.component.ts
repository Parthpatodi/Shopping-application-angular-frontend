import { Component, OnInit } from '@angular/core';
import {WomenSubcategoryService} from '../women-subcategory.service'
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  men:any = '';
  constructor(private womenService:WomenSubcategoryService) { }

  ngOnInit(): void {
    this.womenService.subCategory().subscribe(data=>{
      alert(data);
      this.men = data;
    });
  }
  
}
