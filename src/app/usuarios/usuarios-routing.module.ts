import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRouterComponent } from '../components/user-router/user-router.component';
import { RouterHijasUsuariosListadoComponent } from './router-hijas-usuarios-listado/router-hijas-usuarios-listado.component';
import { RouterHijasUsuariosDetalleComponent } from './router-hijas-usuarios-detalle/router-hijas-usuarios-detalle.component';
import { CanActivateGuard } from '../can-activate.guard';

const routes: Routes = [
  
  { path: 'home', component: UserRouterComponent,
    // canActivate:[CanActivateGuard],  ///esta linea deberia ser para canActivateChild 
    children :[
      { path: '', component: RouterHijasUsuariosListadoComponent }, //rutashijas ex home
      { path: ':id', component: RouterHijasUsuariosDetalleComponent }, //rutashijas ex home/1
    ]}, //rutasMultiples
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }





















