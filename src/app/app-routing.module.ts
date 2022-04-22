import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MenSubcategoryComponent } from './men-subcategory/men-subcategory.component';
import { SigninComponent } from './signin/signin.component'
import { WomenSubcategoryComponent } from './women-subcategory/women-subcategory.component';
import { SignupComponent } from './signup/signup.component';
import{ AboutUsComponent } from './about-us/about-us.component';
import {MenProductComponent} from './men-product/men-product.component';
import {AuthGuard} from './auth.guard';
import {  MenKurtaPajamaComponent} from './men-kurta-pajama/men-kurta-pajama.component';
import {WomenProductviewComponent} from './women-productview/women-productview.component';
import { CartComponent} from './cart/cart.component';
import { SearchProductComponent } from './search-product/search-product.component';
const routes: Routes = [
  {path:'',component: MainHomeComponent},
 {path:'main-home',component: MainHomeComponent},
 {path:'sub-category-men',component: MenSubcategoryComponent},
 {path:'sub-category-women',component: WomenSubcategoryComponent},
 {path:'signIn',component:SigninComponent},
 {path:'signUp',component:SignupComponent},
 {path:'app-about-us',component:AboutUsComponent},
 {path:'men-product',component:MenProductComponent},
 {path:'kurta-pajama/:id',component:MenKurtaPajamaComponent},
 {path:'cart-product-view/:id',component:WomenProductviewComponent,canActivate:[AuthGuard]},
 {path:'add-cart',component:CartComponent,canActivate:[AuthGuard]},
 {path:'search-product',component:SearchProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
