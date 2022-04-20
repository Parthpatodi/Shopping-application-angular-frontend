import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationService} from '../customer-registration.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService: CustomerRegistrationService ) { }
   name: string='';
   email: string='';
   password: string='';
   mobile:string='';
   address: string='';
   errorMessage:any='';
   loading:any='';
  ngOnInit(): void {
  }
  signUp(){
    this.customerService.signUp_user(this.name,this.email,this.password,this.address,this.mobile).subscribe(data => {
      alert(data);

    },
    (error) => {                              //Error callback
      console.error('error caught in component')
      this.errorMessage = error;
      this.loading = false;
     alert(this.errorMessage.message);
      //throw error;   //You can also throw the error to a global error handler
    })
  }

}
