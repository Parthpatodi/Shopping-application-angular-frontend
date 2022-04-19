import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {
  signIN = 'https://vivah-backend.herokuapp.com/user/signin';
  sign = 'https://vivah-backend.herokuapp.com/user/signup';
  constructor(private http: HttpClient) { }
  signUp_user(name: string, email: string, password: string,address:string,mobile:string){
    return this.http.post<any>(this.sign,{
         name:name,
         email:email,
         password:password,
         address:address,
         mobile:mobile
    });
  }
  signIn_user(email: string, password: string){
    return this.http.post<any>(this.sign,{
         email:email,
         password:password
    });
  }
}
