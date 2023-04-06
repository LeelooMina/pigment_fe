import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'http://localhost:3000/api/v1/posts/'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.baseUrl);
  }
}
