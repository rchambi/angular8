import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
/// se copio todo el  --canDeactivate
export interface PuedeDesactivar {
  //debe retornar un obversable, promesa o bool -sincrona o asincrona
  permitirSalirDeRuta: () => Observable<boolean> | Promise<boolean> | boolean;
}
//es un servicio xq tiene el Injectable
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<PuedeDesactivar> {
  canDeactivate(component: PuedeDesactivar) {
    return component.permitirSalirDeRuta ? component.permitirSalirDeRuta() : true;
  }
}