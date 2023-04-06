import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PigmentsServices {

  baseUrl = 'http://localhost:3000/api/v1/pigments/'

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.baseUrl + 'pigments');
  }
}
