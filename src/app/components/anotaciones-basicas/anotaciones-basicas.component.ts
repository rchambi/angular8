import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotaciones-basicas',
  templateUrl: './anotaciones-basicas.component.html',
  styleUrls: ['./anotaciones-basicas.component.css']
})
export class AnotacionesBasicasComponent implements OnInit {
 persona = {nombre:'alan'};
 saludos ='hola a todos';
 saludo:string ='hola';

 textoEscrito: string;// creo q valor null
 respuestaReferencia: string;// creo q valor null
 imagenURL:string; //bindingXpropiedad

 colorCheck2=true;
 alturaAnchura=100;
 texto:string; //uso-ngModel
 opcion: string // uso-ngSwitch
 //uso-ngFor
 personas: any[] = [
  { nombre: "Felipe Gavilán", edad: 999 },
  { nombre: "Claudia Rodríguez", edad: 43 },
  { nombre: "Fernando Medina", edad: 23 },
  { nombre: "Milton Encarnación", edad: 53 }
];
  constructor() { }


  ngOnInit() {
    //bindingXpropiedad - seleccionar el seleccionado la 1 vez
    this.imagenURL= (<HTMLInputElement>document.getElementById('selectId')).value;
  }
  // bindingEventos
  mostrarTexto(event){
    this.textoEscrito=event.target.value;
  }
  // usoDe#VariableDeReferencia
  usoReferencia(variable){
    this.respuestaReferencia=variable.innerHTML;
  }
  //no hace falta recibirlo x parametro -uso-ngModel
  ConvertirMayusculas(){
    this.texto = this.texto.toUpperCase();    
  }
  // uso-ngModel
  ConvertirMinusculas(){
    this.texto = this.texto.toLowerCase();
  }
}

