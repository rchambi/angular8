import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRouterComponent } from '../components/post-router/post-router.component';
import { CanActivateGuard } from '../can-activate.guard';
import { PostsResolverGuard } from '../posts-resolver.guard';

const routes: Routes = [
////uso de LazyLoading
{
  path: '',
  canActivateChild: [CanActivateGuard],
  children:[
    {
      path: '',
      component: PostRouterComponent,     
      resolve: { resp: PostsResolverGuard }
    }, 
    {
      path: ':id', //  ex /post/2
      component: PostRouterComponent,
       resolve: { resp: PostsResolverGuard } //resolve -> todos los necesarios es usuarios
    }

  ]

}
   

// // si no es usado por lazyLoading  descomentar y comentar lo de arriba
  // //rutasMultiples
  // {
  //   path: 'post',
  //   component: PostRouterComponent,
  //   canActivate: [CanActivateGuard],   // canActivate: [CanActivateGuard] // canActivate
  //   resolve: { resp: PostsResolverGuard } //resolve -> todos los necesarios es usuarios,post
  // }, 
  // {
  //   path: 'home/:id/post',
  //   component: PostRouterComponent,
  //   canActivate: [CanActivateGuard],   // canActivate: [CanActivateGuard] // canActivate
  //   resolve: { resp: PostsResolverGuard } //resolve -> todos los necesarios es usuarios
  // }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
