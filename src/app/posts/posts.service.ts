import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { AuthService } from '../auth/auth.service';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private newPostSubject = new Subject<Post>();

  baseUrl = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPosts(count: number, offset: number) {
    const token = this.authService.getToken()

    return this.http.get(this.baseUrl + `posts?limit=${count}&offset=${offset}`,{
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).pipe(
      // handle errors and transform response as needed
    );
  }



  addPost(post: any){
   const token = this.authService.getToken()

    return this.http.post(this.baseUrl + 'posts', post, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).pipe(
      tap((newPost: any) => {
        this.newPostSubject.next(newPost); // emit the new post to subscribers
      })
    );
}

subscribeToNewPosts(): Observable<Post> {
  return this.newPostSubject.asObservable();
}

updatePost(post: Post, id: number){
  const token = this.authService.getToken()

  console.log("Post ID:", id)

    return this.http.put(`http://localhost:3000/api/v1/post/${id}`, post, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).pipe(
      tap((newPost: any) => {
        this.newPostSubject.next(newPost);
        console.log(newPost) // emit the new post to subscribers
      })
    );

}

}
