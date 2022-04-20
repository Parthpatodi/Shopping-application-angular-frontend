import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationService} from '../customer-registration.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService: CustomerRegistrationService) { }
   name: string='';
   email: string='';
   password: string='';
   mobile:string='';
   address: string='';
  ngOnInit(): void {
  }
  signUp(){
    this.customerService.signUp_user(this.name,this.email,this.password,this.address,this.mobile).subscribe(data => {
      alert("Saved SuccessFul");

    })
  }
}
