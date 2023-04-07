import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts/posts.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {
  newPost = new Post(0, '', '', 0);

  constructor(private postsService:PostsService){}

  createPost(form: NgForm) {
    const post = new Post(0, form.value.title, form.value.content, 0);
    this.postsService.addPost(post).subscribe((res: any) => {
      if (res.success) {
        this.newPost = new Post(0, '', '', 0);
        form.resetForm();
      }
    });
  }
}
