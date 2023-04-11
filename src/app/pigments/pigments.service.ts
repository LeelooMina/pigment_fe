import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PigmentsServices {

  baseUrl = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) { }

  getPigments() {
    return this.http.get(this.baseUrl + 'pigments');
  }
}
