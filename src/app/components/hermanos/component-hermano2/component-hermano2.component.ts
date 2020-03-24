import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-hermano2',
  templateUrl: './component-hermano2.component.html',
  styleUrls: ['./component-hermano2.component.css']
})
export class ComponentHermano2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // --------------------------------------enviando del hijo1-->padre-->hijo2 //comunicacionEntreHermanos(padre)
  @Input()
  textoHijo2:String;

}
