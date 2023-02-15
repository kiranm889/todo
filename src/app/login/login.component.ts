import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='kiran'
  password=''
  errorMsg="Invalid Credentials"
  invalidLogin=false

  constructor(private router:Router){}

  loginButton(){
    console.log(this.username)
    console.log(this.password)
    if(this.username=='kiran1' && this.password=='dummy'){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }

  }
}
