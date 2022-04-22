import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationService} from '../customer-registration.service';
import { GoogleLoginProvider,FacebookLoginProvider,SocialAuthService,SocialUser } from 'angularx-social-login';
import { Router} from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user!:SocialUser;
  constructor(private router:Router ,private customerService: CustomerRegistrationService,private authService:SocialAuthService,private api:ApiService) { }
  email: string='';
  password: string='';
  errorMessage:any='';
  loading:any='';
  name:any;
  provider:any;
  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user = user;
      this.email = this.user.email;
      this.name = this.user.name;
      this.provider = this.user.provider;
    })
  }

  sign(){
    this.customerService.signIn_user(this.email,this.password).subscribe(data => {
      console.log(data);
      // alert(data);
     localStorage.setItem('jwt-token',data.token);
      // alert("login successfully"+data.token);
      this.router.navigate(['main-home']);
    },
    (error) => {                              //Error callback
      console.error('error caught in component')
      this.errorMessage = error;
      this.loading = false;
     alert(this.errorMessage);
      //throw error;   //You can also throw the error to a global error handler
    })
  }

  signinwithGoogle():any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.api.logIn(this.email,this.name,this.provider).subscribe(data=>{
      if(data.result)
      alert("Login success"+data.token);
    })
  }

  signinwithFacebook():any{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    this.api.logIn(this.email,this.name,this.provider).subscribe(data=>{
      if(data.result)
      localStorage.setItem('jwt-token',data.token);
      alert("Login success"+data.token);
    })
  }

  logOut():any{
    this.authService.signOut();
  }


}
