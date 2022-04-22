import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerRegistrationService} from './customer-registration.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private customerService:CustomerRegistrationService,private router:Router){}
  canActivate():boolean{
   if(this.customerService.checkToken()){
     alert("token check true")
     return true;
   }
   else{
     alert("token check false");
     
     this.router.navigate(['signIn']);
     return false;


   }
    
  }
  
}
