import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router, private userService:UserService) { }

  getToken(){

    if (localStorage.getItem('token') != null){
    return JSON.parse(localStorage.getItem('token')!)
    }
    else{
      return null;
    }
  }

  setToken(token: any){
    localStorage.setItem('token', JSON.stringify(token))

  }

  autoSignIn(){
    const token = this.getToken()
    if (token == null){
      return;
    }

    this.http.get("http://localhost:3000/api/v1/users/me",
    {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res:any) =>{
      if(res.success){
        this.userService.setCurrentUser(res.payload)
        this.route.navigate(['/home'])
      }
    }
    )
  }

  signup(newUser: any){
    return  this.http.post("http://localhost:3000/api/v1/users/create", newUser)
  }

  login(userLogin: any){
    return  this.http.post("http://localhost:3000/api/v1/users/login", userLogin)
  }

  logout(){
    
  }
}
