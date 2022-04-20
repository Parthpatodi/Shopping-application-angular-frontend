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

  constructor(private router:Router,private customerService:CustomerRegistrationService ,private search : SearchProductService) { }
   searchText:string = "";
  ngOnInit(): void {
  }
  signOut(){
    localStorage.removeItem('jwt-token');
    this.router.navigate(['signIn']);
  }
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }

   getSearchResult(){
    this.search.getSearchResult(this.searchText).subscribe(data => {
      this.searchText = data;
    });
  }

}
