import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CustomerRegistrationService} from  '../customer-registration.service' ;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 // @Input()isLoggedIn():boolean;
  constructor(private router:Router,private customerService:CustomerRegistrationService) { }

  ngOnInit(): void {
  }
  signOut(){
    localStorage.removeItem('jwt-token');
    this.router.navigate(['signIn']);
  }
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }
 
}
