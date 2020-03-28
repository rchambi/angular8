import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2-hijoPadre',
  templateUrl: './hijo2-hijoPadre.component.html',
})
export class Hijo2PadreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // <!---------------------------------------------- ComponenteHijoPadre ------------------------------------------------->
 @Output()
 enviarAlPadre:EventEmitter<string>= new EventEmitter<string>();
 enviarValorAlcomponentePadre(value:string){
   this.enviarAlPadre.emit(value);
 }
}
