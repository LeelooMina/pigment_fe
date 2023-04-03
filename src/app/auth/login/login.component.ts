import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService:AuthService) { }

  onSubmit(){
    const userLogin = this.loginForm.value

   this.authService.login(userLogin).subscribe((res: any) => {
      console.log(res)
    })
  }


  ngOnInit(): void {
  }

}
