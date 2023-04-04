import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User | null = null;

  constructor(private userService:UserService, private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.currentUserSubject.subscribe((user:User | null) => {
      this.currentUser = user;
    })
  }

  onLogout(){
    this.authService.logout();
  }

}
