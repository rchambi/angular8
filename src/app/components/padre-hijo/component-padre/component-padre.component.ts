import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChildrenComponent } from '../children/children.component';


@Component({
  selector: 'app-component-padre',
  templateUrl: './component-padre.component.html',
})
// --- AfterViewInit -> solo para el uso de UsoViewChildren para ejecutar el evento despues de la carga de todo.
export class ComponentPadreComponent implements AfterViewInit {
  


  constructor() { }

  
  // ---------------------------------------------- ComponentePadreHIjo ------------------------------------------------
  textoPadre: string;
  enviarValorAlComponenteHijo(valorpadre: string) {
    this.textoPadre = valorpadre;

  }
  // ---------------------------------------------- ComponenteHijoPadre ------------------------------------------------
  mensajeDesdeHijo: string;
  recibirMensaje(mensaje: string) {
    console.log(mensaje);

    this.mensajeDesdeHijo = mensaje;
  }



  // ---------------------------------------------- UsoViewChild ------------------------------------------------
  // angular<8
  // @ViewChild(ChildComponent) componenteHijo:ChildComponent;

  //angual8 necestia un segundo parametro
  @ViewChild(ChildComponent, {static: false}) componenteHijo: ChildComponent
  texto: string;
  mensajeError: string;

  enviarMensaje(value: string) {
    if (!value) {
      this.mensajeError='escribir un mensaje primero';
    } else {
      this.mensajeError='';
      ///mostrarMensaje es la funcion del hijo
      this.componenteHijo.mostrarMensaje(value);    
    }
  }

  // ---------------------------------------------- UsoViewChildren ------------------------------------------------
  arr=[1,2,3];
  @ViewChildren(ChildrenComponent)
  hijos: QueryList<ChildrenComponent>;
  
  ngAfterViewInit(): void {
    ////////no lo uso en el ejmeplo
    this.hijos.changes.subscribe((componentes:QueryList<ChildrenComponent>) =>{
      componentes.forEach(element => {
        
      });

    });
  }
  
  agregar() {
    this.arr.push(this.arr.length +1);
  }
  remover(){
    this.arr.pop();
  }
  voltearColores(){
    this.hijos.forEach((componente:ChildrenComponent) =>{
      componente.cambiarColor();
    });
  }

  voltearColor(index: number) {
    console.log(index);
    
    if (!index) { return    }
    const componente =  this.hijos.toArray()[index];
    //se invoca al metodo  del hijo
    componente.cambiarColor();
  }
}
