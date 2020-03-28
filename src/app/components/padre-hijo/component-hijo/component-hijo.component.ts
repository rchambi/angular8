import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-component-hijo',
  templateUrl: './component-hijo.component.html',
})
export class ComponentHijoComponent implements OnInit {
  // ComponentePadreHIjo
  @Input()
  textoHijo:string;


  private _textoHijo2:string;

  @Input()  
  set textoHijo2(value : string) {
    value = value || ''; // si es null o vacio
    this._textoHijo2= value.toUpperCase();
  }
  
  get textoHijo2() : string {
    return this._textoHijo2;
  }
  
  
  constructor() {
    console.log("constructor componente hijo");    
   }
 
  ngOnInit() {
  } 
}
