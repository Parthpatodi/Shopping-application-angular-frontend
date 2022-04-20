import { Component } from '@angular/core';
import { CustomerRegistrationService} from  './customer-registration.service' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-application-frontend';
  constructor(private customerService:CustomerRegistrationService){}
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }
}
