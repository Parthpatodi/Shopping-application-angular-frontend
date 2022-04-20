import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MenSubcategoryComponent } from './men-subcategory/men-subcategory.component';
import { SigninComponent } from './signin/signin.component'
import { WomenSubcategoryComponent } from './women-subcategory/women-subcategory.component';
import { SignupComponent } from './signup/signup.component';
import{ AboutUsComponent } from './about-us/about-us.component';
import {MenProductComponent} from './men-product/men-product.component';
const routes: Routes = [
  {path:'',component: MainHomeComponent},
 {path:'main-home',component: MainHomeComponent},
 {path:'sub-category-men',component: MenSubcategoryComponent},
 {path:'sub-category-women',component: WomenSubcategoryComponent},
 {path:'signIn',component:SigninComponent},
 {path:'signUp',component:SignupComponent},
 {path:'app-about-us',component:AboutUsComponent},
 {path:'app-product -us',component:MenProductComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
