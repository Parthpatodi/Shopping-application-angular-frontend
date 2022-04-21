import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  login = "https://vivah-backend-api.herokuapp.com/user/googleSignin"

  constructor(private http:HttpClient) { }

  logIn(email:string,name:string,provider:string):Observable<any>{
    return this.http.post<any>(this.login,{email:email,username:name,provider:provider});
  }

}
