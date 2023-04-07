import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'http://localhost:3000/api/v1/posts/'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.baseUrl);
  }

  addPost(post: Post){

  }
}
