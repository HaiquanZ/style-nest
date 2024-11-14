import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './enviroment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add token
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      // 'Content-Type': 'application/json'
    });


    // add base URL
    let url = '';
    url = `${environment.server.apiUrl}${req.url}`

    // Clone request
    const modifiedReq = req.clone({
      url: url,
      headers: headers
    });

    return next.handle(modifiedReq);
  }
}