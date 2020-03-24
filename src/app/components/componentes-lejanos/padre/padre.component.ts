import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html'
})
export class PadreComponent implements OnInit {

  //AQUI PODEMOS ACCEDER DESDE LE PADRE A UN MENSAJE DEL NIETO -- publico el servicio
  // --------------------------------ComponentesLejanos-------------------------------
  constructor(public servicio:ComunicationService) { }
  ngOnInit() {    
  }

}
