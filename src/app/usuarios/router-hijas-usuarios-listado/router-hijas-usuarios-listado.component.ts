import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PostRouterService } from 'src/app/services/post-router.service';

@Component({
  selector: 'app-router-hijas-usuarios-listado',
  templateUrl: './router-hijas-usuarios-listado.component.html',
  styleUrls: ['./router-hijas-usuarios-listado.component.css']
})
export class RouterHijasUsuariosListadoComponent implements OnInit {
  // rutas hijas
  users : User[];

  constructor(private router: Router, private userService: UserService, private postService: PostRouterService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(resp=>{
      this.users=resp;
    },error=>{
      console.log(error);
    });
  }
  navegarHaciaPost() {
    this.router.navigate(['/post']);
  }
  verPosts(id: string) { 
    // this.router.navigate(['/home',id,'post']);  // se comento para usar lazyLoading      
    this.router.navigate(['/post',id]); //comentar si no usa lazy

  }

}
