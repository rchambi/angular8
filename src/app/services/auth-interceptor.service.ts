import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//se implement HttpInterceptor
//se tiene declarar como provider en app.module //
// {
//   provide: HTTP_INTERCEPTORS,
//   useClass: AuthInterceptorService -->nombreClase,
//   multi: true -->permitir se use otros interceptores
// }
export class AuthInterceptorService implements HttpInterceptor {
  
  //el metodo es siempre le mismo solo cambia los valores de clone
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http-interceprot');
    req= req.clone({
      setHeaders :{'Authorization': 'token http header'} ///colocarmos aqui los datos q necesitemos
    });
    return next.handle(req);
  }

  constructor() { }
}
