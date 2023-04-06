import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
      this.postsService.getPosts().subscribe((res: any) => {
        // console.log(res)
        // if (res.success) {
          this.posts = res;
          console.log(this.posts)
        // }
      })
  }

}
