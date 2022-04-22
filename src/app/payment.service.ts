import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  orderApi = "https://vivah-backend-api.herokuapp.com/pay";
  public createOrder(amount:any){
    return this.http.post<any>(this.orderApi,{amount :amount});
  }
}
