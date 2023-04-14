import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    phone: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    username: new FormControl('')

  })

  constructor(private authService:AuthService, private route:Router) { }

  onSubmit(){
    const newUser = this.signupForm.value

   this.authService.signup(newUser).subscribe((res: any) => {
    if(res.success){
      console.log(res)
      this.route.navigate(['/login'])
    }
    })
  }

  ngOnInit(): void {
  }

}
