import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-sec-ventana',
  templateUrl: './router-sec-ventana.component.html',
  styleUrls: ['./router-sec-ventana.component.css']
})
export class RouterSecVentanaComponent implements OnInit {
  // rutas secundarias
  
  ngOnInit(): void {    
  }
  enviado = false;
  constructor(private router: Router) { }

  cerrar() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
