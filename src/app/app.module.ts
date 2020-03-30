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
import { AnotacionesBasicasComponent } from './components/anotaciones-basicas/anotaciones-basicas.component';
import { ComponentPadreComponent } from './components/padre-hijo/component-padre/component-padre.component';
import { ComponentHijoComponent } from './components/padre-hijo/component-hijo/component-hijo.component';
import { PadreComponent } from './components/componentes-lejanos/padre/padre.component';
import { Hijo1Component } from './components/componentes-lejanos/hijo1/hijo1.component';
import { Hijo2Component } from './components/componentes-lejanos/hijo2/hijo2.component';
import { Nieto1Component } from './components/componentes-lejanos/nieto1/nieto1.component';
import { Nieto2Component } from './components/componentes-lejanos/nieto2/nieto2.component';
import { ComponentHermano2Component } from './components/hermanos/component-hermano2/component-hermano2.component';
import { ComponentHermano1Component } from './components/hermanos/component-hermano1/component-hermano1.component';
import { ComponentPadre2Component } from './components/hermanos/component-padre2/component-padre2.component';
import { ChildComponent } from './components/padre-hijo/child/child.component';
import { ChildrenComponent } from './components/padre-hijo/children/children.component';
import { Hijo2PadreComponent } from './components/padre-hijo/hijo2-hijoPadre/hijo2-hijoPadre.component';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort'; ///con la instalcion de AngMaterial
import { MatTooltipModule} from '@angular/material/tooltip';
import { ListarComponent } from './components/AngularMatComponentes/Layout/listar/listar.component';
import { StepperComponent } from './components/AngularMatComponentes/Layout/stepper/stepper.component';
import { TabsComponent } from './components/AngularMatComponentes/Layout/tabs/tabs.component';
import { ArbolComponent } from './components/AngularMatComponentes/Layout/arbol/arbol.component';
import { TablaComponent } from './components/AngularMatComponentes/DataTable/tabla/tabla.component';
import { AngularMatPadreComponent } from './components/AngularMatComponentes/angular-mat-padre/angular-mat-padre.component';
import { TooltipComponent } from './components/AngularMatComponentes/PopUpAndModels/tooltip/tooltip.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutoCompleteComponent } from './components/AngularMatComponentes/FormControls/auto-complete/auto-complete.component';
import { AutoComplete2Component } from './components/AngularMatComponentes/FormControls/auto-complete2/auto-complete2.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckBoxComponent } from './components/AngularMatComponentes/FormControls/check-box/check-box.component';
import {MatRadioModule} from '@angular/material/radio';
import { DatepickerComponent } from './components/AngularMatComponentes/FormControls/datepicker/datepicker.component';
import { Datepicker2Component } from './components/AngularMatComponentes/FormControls/datepicker2/datepicker2.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RadioButtonComponent } from './components/AngularMatComponentes/FormControls/radio-button/radio-button.component';
import { SliderComponent } from './components/AngularMatComponentes/FormControls/slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { SlideToggleComponent } from './components/AngularMatComponentes/FormControls/slide-toggle/slide-toggle.component';
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
    AnotacionesBasicasComponent,
    //components 
    ComponentPadreComponent,
    ComponentHijoComponent,
    ComponentPadre2Component,
    ComponentHermano1Component,
    ComponentHermano2Component,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    Nieto1Component,
    Nieto2Component,
    ChildComponent,
    ChildrenComponent,
    Hijo2PadreComponent,

    AngularMatPadreComponent,
    TablaComponent,
    ArbolComponent,
    TabsComponent,
    StepperComponent,
    ListarComponent,
    TooltipComponent,
    AutoCompleteComponent,
    AutoComplete2Component,
    CheckBoxComponent,
    DatepickerComponent,
    Datepicker2Component,
    RadioButtonComponent,
    SliderComponent,
    SlideToggleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, ///cuando se usa formulario // moduloFormulario uso-ngModel
    HttpClientModule,  //// para usar con servicios tiene q ir esta linea
    UsuariosModule,//--rutasMultiples
    // PostsModule,  //lazyLoading --> se carga x lazy


    BrowserAnimationsModule,
    ////////angular Material Component
    MatTableModule, //para la tabla
    MatPaginatorModule, //para la tabla
    MatSortModule, //para la tabla
    // -----------------------
    MatInputModule ,///////para los input
    //////////////////////////////
    // ----------------------
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTreeModule, ///////para los tree
    ///////////////////-------------

    MatTabsModule ,///////para los Tab
    
    ///////////////////-------------
    MatStepperModule ,///////para los Stepper

    ///////////////////-------------
    MatListModule ,///////para los List
    
    ///////////////////-------------
    MatTooltipModule ,///////para tooltip


    //formControles
    MatAutocompleteModule, //autocomplete tambien usa input 
    MatSlideToggleModule, // es primario para toggle - aunque en este caso lo usa input
    MatCheckboxModule,
    MatRadioModule, // radiobuttoon
    
    MatDatepickerModule, //datepicker
    MatNativeDateModule, //datepicker

    MatFormFieldModule,  //formField

    MatSliderModule,  //slider';
    
    MatSelectModule,
    







    

    AppRoutingModule///-rutas --siempre tiene q ser ultimo x el wildcard --rutasMultiples
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
    // SpotifyService
    , DatePipe //////////usoDeDatePipe    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
