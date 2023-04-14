import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../../shared/models/post.model';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {

  currentUser: any;

  ngOnInit(): void {
  this.currentUser = this.userService.currentUser;
  }


  postFormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private postsService:PostsService, private userService:UserService){}

  createPost() {
    const newPost = this.postFormGroup.value;

    const currentUsername = this.currentUser.username;
    const post = newPost as Post
    // Add current username to newPost object
    post.username = currentUsername;



    this.postsService.addPost(post).subscribe({

      next: (res: any) => {
        // this.closeBtn.nativeElement.click();
        // this.blogService.onAddBlog(res.payload.blog)
      },
      error: (errorRes) => {
        // this.errors = errorRes.error.errors;
        // console.log(errorRes);
      },
  });



    // this.blogService.createBlog(newBlog).subscribe({
    //   next: (res:any) => {
    //     this.closeBtn.nativeElement.click();
    //     this.blogService.onAddBlog(res.payload.blog)
    //   },
    //   error: (errorRes) => {
    //     this.errors = errorRes.error.errors;
    //     console.log(errorRes);
    //   },
    // });
  }





}

