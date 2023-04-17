import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintServices {

  baseUrl = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) { }

  getPaints() {
    return this.http.get(this.baseUrl + 'paints');
  }

  filterPaints(){
    return this.http.get(this.baseUrl + 'paints');
  }

  getColorFamilies(){
    return this.http.get(this.baseUrl + 'color_families');
  }

}
