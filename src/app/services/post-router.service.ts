import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostRouterService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  // rutasParam
  getPosts(): Observable<Post[]> {
    const url = this.baseUrl + 'posts';
    return this.http.get<Post[]>(url);    
  }
  // rutasParam
  getPostByUser(id: string): Observable<Post[]> {
    const url = `${this.baseUrl}posts/?userId=${id}` ;
    return this.http.get<Post[]>(url);
  }

}
