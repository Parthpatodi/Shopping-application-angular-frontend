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
import { AddFavouriteComponent} from './add-favourite/add-favourite.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
const routes: Routes = [
 {path:'',component: MainHomeComponent},
 {path:'main-home',component: MainHomeComponent},
 {path:'sub-category-men',component: MenSubcategoryComponent},
 {path:'sub-category-women',component: WomenSubcategoryComponent},
 {path:'signIn',component:SigninComponent},
 {path:'signUp',component:SignupComponent},
 {path:'app-about-us',component:AboutUsComponent},
 {path:'men-product',component:MenProductComponent},
 {path:'product/:id',component:MenKurtaPajamaComponent},
 {path:'cart-product-view/:id',component:WomenProductviewComponent},
 {path:'add-cart',component:CartComponent,canActivate:[AuthGuard]},
 {path:'search-product',component:SearchProductComponent},
 {path:'add-favourite',component:AddFavouriteComponent},
 {path:'user-profile',component:UserProfileComponent,canActivate:[AuthGuard]},
 {path:'**' , component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
