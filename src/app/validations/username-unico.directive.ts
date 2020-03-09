import { Directive, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { WebApiService } from '../services/web-api.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[usernameUnico]',
  providers:[{provide: NG_ASYNC_VALIDATORS,useExisting: UsernameUnicoDirective, multi: true }]
})
// directivaAsyncrona -- controla qe el nombre sea unico
export class UsernameUnicoDirective implements AsyncValidator {
  // inyectando el servicio
  constructor(private webApiService: WebApiService) { }
  
  validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
     const usernameUnico= control.value;
     return this.webApiService.obtenerUsernames().pipe(
      map(usernameArr => {      
        if (usernameArr.indexOf(usernameUnico) !== -1) {
          return { usernameUnico : true}; //si existe el usuario
        }
        return null;  // en caso q no exista
     })
    );
  } 


}

////////rectivo -- creamos el servicio para ser usado por la clase de componente
@Injectable({providedIn: 'root'})
export class UsernameUnicoService implements AsyncValidator  {
 constructor(private webApiService: WebApiService) { }

 validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors>
 {
   const usernameUnicoDirective = new UsernameUnicoDirective(this.webApiService);
    return usernameUnicoDirective.validate(control);
 }
}