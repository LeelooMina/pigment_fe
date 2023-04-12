import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPalettes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/palettes`);
  }

  createPalette(palette: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/palettes`, palette);
  }

  updatePalette(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/palettes/${id}`, data);
  }

  deletePalette(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/palettes/${id}`);
  }
}
