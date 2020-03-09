import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
// se puede implementar // canActivateChild 
export class CanActivateGuard implements CanActivate,CanActivateChild, CanLoad {
  constructor(private router: Router, private authService: AuthService){}
  
  // canActivate
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogging(state.url);
  }
  // canActivateChild
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  // se modifico solo return del metodo implementado
    return this.canActivate(childRoute, state);
  }
  //canLoad
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    const url = `/${route.path}`;
    return this.checkLogging(url);
  }

  checkLogging(url: string){
    if (this.authService.isLoggedIn(url)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
