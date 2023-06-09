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

  filterPaintsByColor(color_family_id: any){
    return this.http.get(this.baseUrl + `paints?color_family_id=${color_family_id}`);
  }

  getColorFamilies(){
    return this.http.get(this.baseUrl + 'color_families');
  }

}
