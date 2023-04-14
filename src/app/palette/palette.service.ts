import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Paint } from '../shared/models/paint.model';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private newPaintSubject = new Subject<Paint>();

  private baseUrl = 'http://localhost:3000';

  currentPaints: Paint[] = []

  constructor(private http: HttpClient) { }

  getPalettes() {
    return this.http.get(`${this.baseUrl}/palettes`);
  }

  createPalette(palette: any) {
    return this.http.post(`${this.baseUrl}/palettes`, palette);
  }

  updatePalette(id: number, data: any){
    return this.http.put(`${this.baseUrl}/palettes/${id}`, data);
  }

  deletePalette(id: number){
    return this.http.delete(`${this.baseUrl}/palettes/${id}`);
  }

  addPaint(paint: Paint){
    this.currentPaints.push(paint)
    this.newPaintSubject.next(paint)

  }

  subscribeToNewPaints(): Observable<Paint> {
    return this.newPaintSubject.asObservable();
  }
}
