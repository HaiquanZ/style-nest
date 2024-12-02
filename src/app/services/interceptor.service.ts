import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './enviroment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add base URL
    let url = '';
    url = `${environment.server.apiUrl}${req.url}`

    // add token
    const token = localStorage.getItem('token');
    let headers;

    if(req.url == 'cart' || req.url == 'orders/checkout'){
      headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        // 'Content-Type': 'application/json'
      });
    }

    // Clone request
    const modifiedReq = req.clone({
      url: url,
      headers: headers
    });

    return next.handle(modifiedReq);
  }
}