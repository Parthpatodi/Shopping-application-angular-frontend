import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MenSubcategoryComponent } from './men-subcategory/men-subcategory.component';

import { WomenSubcategoryComponent } from './women-subcategory/women-subcategory.component';
const routes: Routes = [
 {path:'main-home',component: MainHomeComponent},
 {path:'sub-category-men',component: MenSubcategoryComponent},
 {path:'sub-category-women',component: WomenSubcategoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
