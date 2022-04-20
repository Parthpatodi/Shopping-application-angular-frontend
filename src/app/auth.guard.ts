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
     return true;
   }
   else{
     this.router.navigate(['men-product']);
     return false;


   }
    
  }
  
}
