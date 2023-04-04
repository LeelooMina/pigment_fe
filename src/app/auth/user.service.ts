import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject = new BehaviorSubject<User | null>(null)

  constructor() { }

  setCurrentUser(user: User){
    this.currentUserSubject.next(user);
  }

  public get currentUser(): User | null{
    return this.currentUserSubject.value;
  }
}
