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
import { AboutUsComponent } from './about-us/about-us.component';
import { MenSherwaniComponent } from './men-sherwani/men-sherwani.component';
import { MenSuitComponent } from './men-suit/men-suit.component';
import { MenKurtaPajamaComponent } from './men-kurta-pajama/men-kurta-pajama.component';


@NgModule({
  declarations: [
    AppComponent,

    SigninComponent,
    SignupComponent,
    WomenSubcategoryComponent,
    MenSubcategoryComponent,
    MenProductComponent,
    NavigationComponent,
    MainHomeComponent,
    AboutUsComponent,
    MenSherwaniComponent,
    MenSuitComponent,
    MenKurtaPajamaComponent
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
