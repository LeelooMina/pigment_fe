import { Component } from '@angular/core';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {
  newPost = new Post(0, '', '', 0);

  createPost() {
    // Implement logic to create a new post here
  }
}
