import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterSecVentanaComponent } from './router-sec-ventana/router-sec-ventana.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './can-activate.guard';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [    
  { path: 'ventana', component: RouterSecVentanaComponent, outlet:'popup' }, ////rutas secundarias  
  { path: 'contacto', component: ContactoComponent, canDeactivate: [CanDeactivateGuard] }, ////canDeactivate
  ////uso de LazyLoading - cuando entre en post recien se cargara el modulo //canLoad --> solo se cargara si esta logueado
  { path: 'post', loadChildren: () => import('./post/posts.module').then(mod=>mod.PostsModule), canLoad: [CanActivateGuard] }, 
  { path: 'login', component: LoginComponent }, ////canActivate
  { path: 'formulario', component: TemplateFormComponent }, ////tema 8 formulario
  { path: 'formularioReactivo', component: ReactiveFormComponent }, ////tema 8 formulario
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //** captura culquier url q no esta definida en las rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }