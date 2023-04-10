import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPosts() {
    return this.http.get(this.baseUrl + 'posts');
  }

  addPost(post: Post){
   const token = this.authService.getToken()

    return this.http.post(this.baseUrl + 'posts', post, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    });
  }
}
