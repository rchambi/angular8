import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {


  // --------------------------------ComponentesLejanos-------------------------------
  mensaje: string; 
  // Subject ->  permite enviar mensajes a varios observadores
  private enviarMensajeSubject= new Subject<string>();
  enviarMensajeObservable=this.enviarMensajeSubject.asObservable();
  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    // next-> envia el mensaje a todos los que suscriptos
    this.enviarMensajeSubject.next(mensaje);
  }

}
