import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CustomerRegistrationService} from  '../customer-registration.service' ;
import { SearchProductService } from '../search-product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private router:Router,private customerService:CustomerRegistrationService) { }

  ngOnInit(): void {
  }
  signOut(){
    if(confirm("Are you Sure ?")){
      localStorage.removeItem('jwt-token');
      this.router.navigate(['signIn']);
    }
  }
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }

  cartCall(){
    this.router.navigate(['add-cart']);
  }

}
