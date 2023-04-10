import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject = new BehaviorSubject<User | null>(null)

  constructor(private http:HttpClient) { }

  setCurrentUser(user: User | null){
    this.currentUserSubject.next(user);
  }

  public get currentUser(): User | null{
    return this.currentUserSubject.value;
  }

  public getUser(id: any){
    return  this.http.post("http://localhost:3000/api/v1/users/show", id)

  }
}
