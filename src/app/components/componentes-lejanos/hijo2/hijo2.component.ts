import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html'
})
export class Hijo2Component  {

  ///para traer el valor del mensaje del componenteNieto
  // --------------------------------ComponentesLejanos-------------------------------
  mensajeHijo1:string;

  //inyecto el servicio
  constructor(private servicio:ComunicationService) { } 

  recibirCambios(){
  //accedo al mensaje
  this.mensajeHijo1=this.servicio.mensaje;

  }
}
