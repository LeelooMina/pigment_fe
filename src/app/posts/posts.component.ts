import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { PostsService } from './posts.service';
import {
  style,
  state,
  animate,
  transition,
  trigger,
} from '@angular/animations';
import { delay } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [  trigger('fadeInOut', [
    transition(':enter', [
      // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 })),
    ]),
    transition(':leave', [
      // :leave is alias to '* => void'
      animate(500, style({ opacity: 0 })),
    ]),
  ]),],
})
export class PostsComponent implements OnInit {

  initialPosts = 5
  postsPerScroll = 3;
  offset = 0;
  loading = false;


  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
      this.postsService.getPosts(this.initialPosts, this.offset).subscribe((res: any) => {
        // console.log(res)
        // if (res.success) {
          this.posts = res;
          console.log(this.posts)
        // }
      })

      this.postsService.subscribeToNewPosts().subscribe((post: Post) => {
        // Add the new post to the posts array
        this.posts.push(post);
    });




    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.loading = true;
        this.postsService.getPosts(this.offset, this.postsPerScroll).pipe(
          delay(1000) // Delay the addition of new posts by 3 seconds
        ).subscribe((res: any) => {

            this.posts.push(...res);
            this.offset += this.postsPerScroll;
            this.loading = false;

        });
      }
    });








  }

}
