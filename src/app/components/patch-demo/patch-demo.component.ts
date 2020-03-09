import { Component, OnInit } from '@angular/core';
import { compare } from 'fast-json-patch'; //patch-roly
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patch-demo',
  templateUrl: './patch-demo.component.html',
  styleUrls: ['./patch-demo.component.css']
})
export class PatchDemoComponent implements OnInit {

  users: User[];//para listar
  model: User; ///usuario modificado
  userOiriginal: User; //usuario original

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((resp: User[]) => {
      this.users = resp;
      this.model = Object.assign({}, this.users[0]) //se selecciona el 1 usuario x default
      this.userOiriginal = this.users[0];//se selecciona el 1 usuario x default
    }, error => {
      console.log(error);
    });
  }

  selectUser(user: User) {        
    this.model = Object.assign({}, user)
    this.userOiriginal = user;
  }
  onSubmit() {
    const patch = compare(this.userOiriginal, this.model);
    this.userService.UpdatePartialUser(this.model.id, patch).subscribe(resp => {
      console.log(resp);

    }, error => {
      console.log(error);

    });

  }

}
