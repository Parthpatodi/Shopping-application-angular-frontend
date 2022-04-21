import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { MenSubcategoryService} from '../men-subcategory.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

function modifyImage(currentImage:any,mainImg:any){
  alert(currentImage.src);
  mainImg.src = currentImage.src;
}
@Component({
  selector: 'app-women-productview',
  templateUrl: './women-productview.component.html',
  styleUrls: ['./women-productview.component.css']
})
export class WomenProductviewComponent implements OnInit {
  validatingForm: FormGroup;

  item:any;
  frontImage:any;
  backImage:any;
  leftImage:any;
  rightImage:any;
  constructor(private activatedRouter:ActivatedRoute,private menService:MenSubcategoryService) {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)

   })
  }
  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.menService.product_detail(id).subscribe(data=>{
      this.item = data;
      this.frontImage = data.productImageFront;
      this.backImage = data.productImageBack;
      this.leftImage = data.productImageLeft;
      this.rightImage = data.productImageRight;
      console.log(data);
    })

  }
  imageChange(currentImage:string){
   // this.item.productImage.
   this.frontImage = currentImage;
  //  this.item.productImageBack = this.frontImage;
  }
  buyNow(){

  }
  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
}
