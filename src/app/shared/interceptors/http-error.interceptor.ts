import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // @ts-ignore
    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Client Error: ${error.error.message}`;
        } else {
          errorMsg = `Error code: ${error.status}, ${error.error.message}`;
        }
        console.log(errorMsg);
        return errorMsg;
      })
    );
  }
}
