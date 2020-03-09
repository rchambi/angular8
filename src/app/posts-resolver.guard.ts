import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Post } from './models/post';
import { PostRouterService } from './services/post-router.service';
import {catchError} from 'rxjs/operators'; ///importar a mano


// resolver
@Injectable({
  providedIn: 'root'
})
export class PostsResolverGuard implements Resolve<Post[]> {

  constructor(private webApiService: PostRouterService, private router: Router) { }
// resolver  - metodo autogenerado  solo de cambio del if para adelante
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    if (route.paramMap.has('id')){
      return this.webApiService.getPostByUser(route.paramMap.get('id')).pipe(catchError(err => {
        this.router.navigate(['/home'])
        return EMPTY;
      }))
    } else {
      return this.webApiService.getPosts();
    }
  }
  
}


