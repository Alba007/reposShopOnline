import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthServiceService} from './auth-service.service';
import {catchError, retry} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToasterPositionsService} from './toaster-positions.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor(private authService: AuthServiceService,
              private router: Router,
              private notifiication: ToasterPositionsService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('Bearer')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // 401 handled in auth.interceptor
          // this.toastr.error(error.message);
          this.notifiication.error('Error', 'Wrong Credentials', 'toast-top-center');
        }
        return throwError(error);
      })
    );
  }
}
