import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any
  currentUser: any;
  postFormGroup: any;



  constructor(private userService:UserService, private postsService:PostsService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
    console.log("check", this.post)

    this.postFormGroup = new FormGroup({
      title: new FormControl(this.post.title),
      content: new FormControl(this.post.content),
    });
  }



  editPost() {
    const newPost = this.postFormGroup.value;

    const currentUsername = this.currentUser.username;
    const post = newPost as Post
    // Add current username to newPost object
    console.log("Hello!")



    this.postsService.onUpdatePost(post, this.post.id).subscribe({

      next: (res: any) => {
        // this.postsService.updatePost(post, this.post.id)
      },
      error: (errorRes) => {
        // this.errors = errorRes.error.errors;
        // console.log(errorRes);
      },
  });
  }

  deletePost(){

    this.postsService.onDeletePost(this.post.id).subscribe({

      next: (res: any) => {
        // this.postsService.updatePost(post, this.post.id)
      },
      error: (errorRes) => {
        // this.errors = errorRes.error.errors;
        // console.log(errorRes);
      },
  });
}

}
