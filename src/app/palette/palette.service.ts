import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Paint } from '../shared/models/paint.model';
import { Palette } from '../shared/models/palette.model';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/user.service';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private newPaintSubject = new Subject<any>();
  private removePaintSubject = new Subject<Paint>();

  private baseUrl = 'http://localhost:3000/api/v1';

  currentPaints: Paint[] = []

  currentPalette: Palette = {
    name: '',
      description: '',
      user_id: 0
  }

  currentUser: any;

  constructor(private http: HttpClient, private authService: AuthService, private userService:UserService) {

   }

  getPalettes() {
    return this.http.get(`${this.baseUrl}/palettes`);
  }

  getUserPalettes(userId: any){
    const token = this.authService.getToken()
    return this.http.get(`${this.baseUrl}/palettes?user_id=${userId}`,   {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
  }

  getPaletteById(palette: Palette){

  }

  createPalette(palette: Palette) {
    this.getUser;
    // this.currentPaints = []
    this.currentPalette = palette
    const token = this.authService.getToken()

    return this.http.post(`${this.baseUrl}/palettes`, palette,
    {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })

  }

  updatePalette(id: number, data: any){
    const token = this.authService.getToken()
    return this.http.put(`${this.baseUrl}/palettes/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    });
  }

  deletePalette(id: number){
    const token = this.authService.getToken();

    return this.http.delete(`http://localhost:3000/api/v1/paint_palettes?palette_id=${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })

    }


  addPaint(paint: Paint){
    if (this.currentPaints.length <= 11){
    this.currentPaints.push(paint)
    this.newPaintSubject.next(this.currentPaints)
    console.log(this.currentPaints)
    }
    else {
      alert("Too much paint! Delete one before adding more.");

    }

  }

  deletePaint(paint: Paint){
    const index = this.currentPaints.indexOf(paint);
      if (index !== -1) {
        this.currentPaints.splice(index, 1);
      }
      console.log(this.currentPaints)
    this.newPaintSubject.next(this.currentPaints)
  }


  subscribeToNewPaints(): Observable<Paint[]> {

    return this.newPaintSubject.asObservable();
  }

  subscribeToRemovePaints(): Observable<Paint> {
    return this.removePaintSubject.asObservable();
  }

  savePalette(palette: any) {
    const token = this.authService.getToken();

    // delete all existing associations
    this.http.delete(`http://localhost:3000/api/v1/paint_palettes?palette_id=${palette.id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe(() => {
      // save the new batch
      this.currentPaints.forEach(paint => {
        this.http.post(`http://localhost:3000/api/v1/paint_palettes`, {
          "paint_id": paint.id,
          "palette_id": palette.id
        }, {
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        }).subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
      });
    }, error => {
      console.log(error);
    });
  }

  deleteAllPaint(id: number){

    const token = this.authService.getToken();
      return this.http.delete(`${this.baseUrl}/palettes/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })

  }






  getUser(){
    this.currentUser = this.userService.currentUser
  }
}
