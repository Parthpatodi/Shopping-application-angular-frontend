import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerRegistrationService} from '../customer-registration.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService: CustomerRegistrationService , private router:Router) { }
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
      alert("Sign up request send . But First verify your email and then login");
       this.router.navigate(['signIn']);
    },
    (error) => {                              //Error callback
      console.error('error caught in component')
      this.errorMessage = error;
      this.loading = false;
     alert("already registered");
      //throw error;   //You can also throw the error to a global error handler
    })
  }

}
