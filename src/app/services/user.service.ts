import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Operation } from 'fast-json-patch';//importar a mano patch - patch-roly

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  

  constructor(private http: HttpClient) { }

  // Get{id}
  getUser(id: number): Observable<User> {
    const url = this.baseUrl + 'users/' + id;
    return this.http.get<User>(url);

  }

  // Get
  getUsers(): Observable<User[]> {
    const url = this.baseUrl + 'users/';
    return this.http.get<User[]>(url);    
  }

  // Usando header
  getUsersWithHeader(): Observable<User[]> {
    // agregando cabeceras
    const headers = new HttpHeaders({
      'Authorization': 'bearer token',
      'X-Pagination': '2',
      'content-type' :'application/json'
    });
    
    //tambien se puede usar con if ex
    // let headers = new HttpHeaders();
    // if(usuarioLogqueado)
    // {

    //   // headers.append('Authorization': 'bearer token');
    // }
    
    const url = this.baseUrl + 'users/';
    return this.http.get<User[]>(url, {headers});    
  }

  //uando query string -enviando parametro como URL
  getUsersWithParams(): Observable<User[]> {
    /// usando queryString
    let params = new HttpParams();
    params= params.append('Authorization', 'bearer token');
    
    const url = this.baseUrl + 'users/';
    return this.http.get<User[]>(url, {params});    
  }

  // Leer cabecera de la respuesta http
  getUsersForReadHeader(): Observable<any> {
    const url = this.baseUrl + 'users/';
    return this.http.get<any>(url, {observe : 'response'} );    
  }


  // Post
  saveUser(user:User): Observable<User> {
    const url = this.baseUrl + 'users/';
    return this.http.post<User>(url, user);    
  }
  // Update
  updateUser(user:User): Observable<User> {
    const url = this.baseUrl + 'users/'+ user.id;
    return this.http.put<User>(url, user);    
  }
  // Patch --bucscar referencias patch-roly
  UpdatePartialUser(id:number, operations: Operation[]) : Observable<any> {
    const url = this.baseUrl + 'users/'+ id;
    return this.http.patch(url,operations);    
  }
  // Delete
  deleteUser(id:number): Observable<any> {
    const url = this.baseUrl + 'users/'+ id;
    return this.http.delete(url);    
  }
}
