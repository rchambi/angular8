import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // ---------------------------------------------- UsoViewChild ------------------------------------------------
  mensaje:string;
  mostrarMensaje(mensaje:string){
    this.mensaje=mensaje;
  }

}
