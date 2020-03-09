import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostRouterService } from 'src/app/services/post-router.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-router',
  templateUrl: './post-router.component.html',
  styleUrls: ['./post-router.component.css']
})
export class PostRouterComponent implements OnInit {
  posts: Post[];

  constructor(
    private router: Router,
    private postService: PostRouterService,
    private activeRoute: ActivatedRoute, ///obtener la ruta activa
  ) { }

  ngOnInit() {
    // resolver
this.activeRoute.data.subscribe((data: {resp: Post[]})=>{
  this.posts = data.resp;
});

    // // descomentar si no se quiere usar - resolve
    // //obtener el id pasado por parametro
    // this.activeRoute.paramMap.subscribe(params => {
    //   if (params.has('id')) {
    //     this.getPostByUser(params.get('id'));
    //   }
    //   else {
    //     this.getPosts();
    //   }
    // });

  }
  // rutasParam
  getPostByUser(id:string){
    this.postService.getPostByUser(id).subscribe((resp: any[]) => {
      this.posts = resp;
    }, (error: any) => {
      console.log(error);
    });
  }

  getPosts() {
    this.postService.getPosts().subscribe((resp: any[]) => {
      this.posts = resp;
    }, (error: any) => {
      console.log(error);
    });
  }

  navegarHaciaUsuarios() {
    this.router.navigate(['/home']);
  }

}
