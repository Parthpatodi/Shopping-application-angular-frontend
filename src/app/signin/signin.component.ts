import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationService} from '../customer-registration.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private customerService: CustomerRegistrationService) { }
  email: string='';
  password: string='';

  ngOnInit(): void {
  }
  signIn(){
    this.customerService.signIn_user(this.email,this.password).subscribe(data => {
      alert("Saved SuccessFul");

    })
  }
}
