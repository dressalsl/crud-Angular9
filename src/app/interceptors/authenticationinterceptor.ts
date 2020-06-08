import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

      req = req.clone({
        setHeaders: {
          Authorization: `${environment.key}`
        }
      });
        return next.handle(req);
    }
}
