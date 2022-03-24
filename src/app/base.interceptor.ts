import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {UserService} from "./service/user.service";
import {Router} from "@angular/router"

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router:Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    const reqHead = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
    if (!token) {
      return next.handle(request);
    }
    return next.handle(reqHead)
      .pipe(
        tap(
          (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status == 401)
                this.router.navigate(['/login'])
                this.userService.logout()
            }
          }
        )
      )
  }
}
