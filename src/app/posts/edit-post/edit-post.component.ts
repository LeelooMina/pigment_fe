import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  @Input() post: any

  currentUser: any;
  postFormGroup: any;




  constructor(private postsService:PostsService, private userService:UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;

  if (this.post) {
    this.postFormGroup = new FormGroup({
      title: new FormControl(this.post.title),
      content: new FormControl(this.post.content),
    });
  } else {
    this.postFormGroup = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
    });
  }

  }


  editPost() {
    const newPost = this.postFormGroup.value;

    const currentUsername = this.currentUser.username;
    const post = newPost as Post
    // Add current username to newPost object
    console.log("Hello!")



    this.postsService.updatePost(post, this.post.id).subscribe({

      next: (res: any) => {
        console.log("What", res)
        // this.closeBtn.nativeElement.click();
        // this.blogService.onAddBlog(res.payload.blog)
      },
      error: (errorRes) => {
        // this.errors = errorRes.error.errors;
        // console.log(errorRes);
      },
  });
  }


  }
