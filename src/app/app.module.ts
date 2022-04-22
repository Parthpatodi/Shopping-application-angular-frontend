import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WomenSubcategoryComponent } from './women-subcategory/women-subcategory.component';
import { MenSubcategoryComponent } from './men-subcategory/men-subcategory.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { WomenProductviewComponent } from './women-productview/women-productview.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenSuitComponent } from './men-suit/men-suit.component';
import { MenKurtaPajamaComponent } from './men-kurta-pajama/men-kurta-pajama.component';
import {TokenService} from './token.service';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import { SearchProductComponent } from './search-product/search-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    WomenSubcategoryComponent,
    MenSubcategoryComponent,
    NavigationComponent,
    MainHomeComponent,
    WomenProductviewComponent,
    CartComponent,
    WishlistComponent,
    AboutUsComponent,
    MenSuitComponent,
    MenKurtaPajamaComponent,
    SearchProductComponent,
    PageNotFoundComponent,
    AddFavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenService,
    multi:true
  },
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '735308524162-eu5dqv98sc557pc1nirgmbk6sm0q74vc.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('515612243382774')
        },

      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  },ApiService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
