import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-padre2',
  templateUrl: './component-padre2.component.html',
  styleUrls: ['./component-padre2.component.css']
})
export class ComponentPadre2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // -------------------------------------- comunicacionEntreHermanos(padre)
  textoHijo1:string;
}
