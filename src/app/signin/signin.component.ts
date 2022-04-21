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
  errorMessage:any='';
  loading:any='';
  ngOnInit(): void {
  }
  
  sign(){
    this.customerService.signIn_user(this.email,this.password).subscribe(data => {
      console.log(data);
      alert(data);
     localStorage.setItem('jwt-token',data.token);
      alert("login successfully"+data.token);
      //if(data.status=='Login Status')
    },
    // (error) => {                              //Error callback
    //   console.error('error caught in component')
    //   this.errorMessage = error;
    //   this.loading = false;
    //   console.log(this.errorMessage)
    //  alert("verfied your Account");
    //   //throw error;   //You can also throw the error to a global error handler
    // }
)
  }
}
