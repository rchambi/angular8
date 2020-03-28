import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-anotaciones-basicas',
  templateUrl: './anotaciones-basicas.component.html',
  styleUrls: ['./anotaciones-basicas.component.css']
  ///UsoEncapsulacion
  // los estilos globales si afectan al componente 
  // ,encapsulation: ViewEncapsulation.Emulated// default 

// los estilos globales no afectan al componente - 
// si el padre esta ShadowDom el hijo tambien
  // encapsulation: ViewEncapsulation.ShadowDom 
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
  constructor(
    private datePipe: DatePipe //-------usoDeDatePipe------
    ) { }


  ngOnInit() {
    //bindingXpropiedad - seleccionar el seleccionado la 1 vez
    this.imagenURL= (<HTMLInputElement>document.getElementById('selectId')).value;
    this.convertirFecha();
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

  // -----------------------------usoDeDatePipe-----------
  // colocar como provider en module.ts DatePipe
  fecha:Date| string ;
  convertirFecha(){
    let date= new Date(1988, 3, 15);   
    this.fecha = this.datePipe.transform(date,"dd/MM/yyyy");    
  }
  // ------------------------------------------------------

  // uso-ngModel
  ConvertirMinusculas(){
    this.texto = this.texto.toLowerCase();
  }
  mostrarMensaje(log:string){
    console.log(log);

  }
}

