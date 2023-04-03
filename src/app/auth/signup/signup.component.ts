import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    password_confirmation: new FormControl('')

  })

  constructor(private authService:AuthService) { }

  onSubmit(){
    const user = this.signupForm.value

   this.authService.signup(user).subscribe((res: any) => {
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
