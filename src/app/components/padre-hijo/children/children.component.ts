import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
})
export class ChildrenComponent {
  // ---------------------------------------------- UsoViewChildren ------------------------------------------------ -->
  colorCheck=true;
  cambiarColor(){
    this.colorCheck= !this.colorCheck;
    console.log(this.colorCheck);
    
  }



  
}
