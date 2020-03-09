import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostRouterService } from 'src/app/services/post-router.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-router',
  templateUrl: './user-router.component.html',
  styleUrls: ['./user-router.component.css']
})
export class UserRouterComponent implements OnInit {
  // comentado por el uso de router hija - si es solo router descomentar

  // users : User[];

  constructor(private router: Router, private userService: UserService, private postService: PostRouterService) { }

  ngOnInit() {

    // this.userService.getUsers().subscribe(resp=>{
    //   console.log(resp);
    //   this.users=resp;
    // },error=>{
    //   console.log(error);
    // });
  }
  // navegarHaciaPost() {
  //   this.router.navigate(['/post']);
  // }
  // verPosts(id: string) {    //rutasParam
  //   this.router.navigate(['/home',id,'post']);        
  // }

}
