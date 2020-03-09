import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// Rutas
import { AppRoutingModule } from './app-routing.module'; //importacion para usar  -rutas

// Servicios
import { AuthInterceptorService } from './services/auth-interceptor.service';


// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { GetDemoComponent } from './components/get-demo/get-demo.component';
import { GetLsitDemoComponent } from './components/get-lsit-demo/get-lsit-demo.component';
import { PostDemoComponent } from './components/post-demo/post-demo.component';
import { PatchDemoComponent } from './components/patch-demo/patch-demo.component';
import { RouterSecVentanaComponent } from './router-sec-ventana/router-sec-ventana.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PasswordValidationDirective } from './validations/password-validation.directive';
import { UsernameUnicoDirective } from './validations/username-unico.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GetDemoComponent,
    GetLsitDemoComponent,
    PostDemoComponent,
    PatchDemoComponent,
    NavbarComponent,
    RouterSecVentanaComponent,
    ContactoComponent,
    LoginComponent,
    TemplateFormComponent,
    PasswordValidationDirective,
    UsernameUnicoDirective,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, ///cuando se usa formulario // moduloFormulario
    HttpClientModule,  //// para usar con servicios tiene q ir esta linea
    UsuariosModule,//--rutasMultiples
    // PostsModule,  //lazyLoading --> se carga x lazy
    AppRoutingModule///-rutas --siempre tiene q ser ultimo x el wildcard --rutasMultiples
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
