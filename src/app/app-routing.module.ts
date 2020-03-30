import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterSecVentanaComponent } from './router-sec-ventana/router-sec-ventana.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './can-activate.guard';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AnotacionesBasicasComponent } from './components/anotaciones-basicas/anotaciones-basicas.component';
import { ComponentPadreComponent } from './components/padre-hijo/component-padre/component-padre.component';
import { PadreComponent } from './components/componentes-lejanos/padre/padre.component';
import { ComponentPadre2Component } from './components/hermanos/component-padre2/component-padre2.component';
import { AngularMatPadreComponent } from './components/AngularMatComponentes/angular-mat-padre/angular-mat-padre.component';

const routes: Routes = [    
  { path: 'ventana', component: RouterSecVentanaComponent, outlet:'popup' }, ////rutas secundarias  
  { path: 'contacto', component: ContactoComponent, canDeactivate: [CanDeactivateGuard] }, ////canDeactivate
  ////uso de LazyLoading - cuando entre en post recien se cargara el modulo //canLoad --> solo se cargara si esta logueado
  { path: 'post', loadChildren: () => import('./post/posts.module').then(mod=>mod.PostsModule), canLoad: [CanActivateGuard] }, 
  { path: 'login', component: LoginComponent }, ////canActivate
  { path: 'formulario', component: TemplateFormComponent }, ////tema 8 formulario
  { path: 'formularioReactivo', component: ReactiveFormComponent }, ////tema 8 formulario
  { path: 'datosBasicos', component: AnotacionesBasicasComponent }, 
  { path: 'componentes', component: ComponentPadreComponent }, 
  { path: 'componentesHermanos', component: ComponentPadre2Component }, 
  { path: 'componentesLejanos', component: PadreComponent }, 
  { path: 'angularMaterial', component: AngularMatPadreComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //** captura culquier url q no esta definida en las rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }