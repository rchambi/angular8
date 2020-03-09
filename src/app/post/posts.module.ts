import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostRouterComponent } from '../components/post-router/post-router.component';

@NgModule({
  declarations: [
    PostRouterComponent //rutasMultiples
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
