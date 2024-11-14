import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(

    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                let errorMessage = 'Unknown error occurred';
                if (error.error instanceof ErrorEvent) {
                    // Xảy ra lỗi mạng hoặc lỗi không mong muốn từ phía client
                    errorMessage = `Error: ${error.error.message}`;
                    console.error(errorMessage);
                } else {
                    // Xảy ra lỗi từ phía server
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    console.error(errorMessage);
                }
                return throwError(errorMessage);
            })
        );
    }
}