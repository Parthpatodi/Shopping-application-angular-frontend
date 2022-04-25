import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {
  signIN = 'http://localhost:3000/user/signin';
 // sign = 'https://vivah-backend.herokuapp.com/user/signup';
 signUP = 'http://localhost:3000/user/signup';
  constructor(private http: HttpClient) { }
  signUp_user(name: string, email: string, password: string,address:string,mobile:string){
    return this.http.post<any>(this.signUP,{
         name:name,
         email:email,
         password:password,
         address:address,
         mobile:mobile
    });
  }
  signIn_user(email: string, pass: string){

    return this.http.post<any>(this.signIN,{
         email:email,
         password:pass
    });
  }
  public checkToken():boolean{
    return !!localStorage.getItem('jwt-token');
  }
}
