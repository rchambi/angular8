import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-component-hermano1',
  templateUrl: './component-hermano1.component.html',
})
export class ComponentHermano1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // --------------------------------------enviando del hijo1-->padre-->hijo2 //comunicacionEntreHermanos(padre)
  @Output()
  enviarAlPadre: EventEmitter<string> = new EventEmitter<string>();

  cambioTexto(valorEnviar:string ){
    console.log(valorEnviar);
    this.enviarAlPadre.emit(valorEnviar);
  }
}
