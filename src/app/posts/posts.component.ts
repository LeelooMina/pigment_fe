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
import { UserService } from '../auth/user.service';


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
  postsPerScroll = 5;
  offset = 0;
  loading = false;

  currentUser = this.userService.currentUser


  posts: Post[] = [];
  editPostId: any;

  constructor(private postsService: PostsService, private userService: UserService ) {}

  ngOnInit(): void {
    console.log("hey")
      this.postsService.getPosts(this.initialPosts, this.offset).subscribe((res: any) => {
        
        // console.log(res)
        // if (res.success) {
          this.posts = res;
          console.log(this.posts)
        // }
      })

      this.postsService.subscribeToNewPosts().subscribe((post: Post) => {
        // Add the new post to the posts array
        this.posts.unshift(post);
    });

    this.postsService.subscribeToEditPosts().subscribe((res: any) => {

      const post = res.post
      // Find the index of the post with the matching id
      const index = this.posts.findIndex(p => p.id === post.id);


      if (index !== -1) {
        // Remove the old post from the array
        this.posts.splice(index, 1);

        // Add the updated post to the beginning of the array
        this.posts.unshift(post);
      }
    });

    this.postsService.subscribeToDeletePosts().subscribe((res: any) => {

      const post = res.post
      // Find the index of the post with the matching id
      const index = this.posts.findIndex(p => p.id === post.id);


      if (index !== -1) {
        // Remove the old post from the array
        this.posts.splice(index, 1);
      }
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
