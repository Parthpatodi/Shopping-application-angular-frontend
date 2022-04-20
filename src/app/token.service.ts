import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler){

    let tokenizedRequest = request.clone({
      setHeaders :{
        Authorization:'jwt-token xx.yy.zz'
      }
    });
    return next.handle(tokenizedRequest);

  }

}
