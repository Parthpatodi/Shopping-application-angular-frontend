import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WomenSubcategoryComponent } from './women-subcategory/women-subcategory.component';
import { MenSubcategoryComponent } from './men-subcategory/men-subcategory.component';
import { MenProductComponent } from './men-product/men-product.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    WomenSubcategoryComponent,
    MenSubcategoryComponent,
    MenProductComponent,
    NavigationComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
