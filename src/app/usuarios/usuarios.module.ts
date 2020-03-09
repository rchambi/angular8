import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';

///
import { UserRouterComponent } from '../components/user-router/user-router.component';
import { RouterHijasUsuariosListadoComponent } from './router-hijas-usuarios-listado/router-hijas-usuarios-listado.component';
import { RouterHijasUsuariosDetalleComponent } from './router-hijas-usuarios-detalle/router-hijas-usuarios-detalle.component';

@NgModule({
  declarations: [
    UserRouterComponent,//rutasMultiples
    RouterHijasUsuariosListadoComponent,//rutas hijas
    RouterHijasUsuariosDetalleComponent //rutas hijas
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule//tambien debe ser el ultimo de sus router
  ]
})
export class UsuariosModule { }
