import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-get-lsit-demo',
  templateUrl: './get-lsit-demo.component.html',
  styleUrls: ['./get-lsit-demo.component.css']
})
export class GetLsitDemoComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
    // this.getUsersWithHeaders();
    // this.getUsersWithParams();
    this.getUsersForReadHeader();
  }
  getUsers() {    
    this.userService.getUsers().subscribe((resp: User[]) => {
      this.users = resp;      
    }, error => {
      console.log(error);
    });
  }
  getUsersWithHeaders() {        
    this.userService.getUsersWithHeader().subscribe((resp: User[]) => {
      this.users = resp;      
    }, error => {
      console.log(error);
    });
  }
  getUsersWithParams() {        
    this.userService.getUsersWithParams().subscribe((resp: User[]) => {
      this.users = resp;      
    }, error => {
      console.log(error);
    });
  }
  // Leer cabecera de la respuesta http
  // ver donde se invoca el metodo y listo
  getUsersForReadHeader() {        
    this.userService.getUsersForReadHeader().subscribe((resp: any) => {
      console.log(resp); //aqui podemos ver los datos del response
      this.users = resp.body;      
    }, error => {
      console.log(error);
    });
  }
  

}
