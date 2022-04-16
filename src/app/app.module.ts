import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WomenSubcategoryComponent } from './women-subcategory/women-subcategory.component';
import { MenSubcategoryComponent } from './men-subcategory/men-subcategory.component';
import { MenProductComponent } from './men-product/men-product.component';

@NgModule({
  declarations: [
    AppComponent,
    WomenSubcategoryComponent,
    MenSubcategoryComponent,
    MenProductComponent
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
