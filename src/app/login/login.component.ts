import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router:Router,
    private hardcoded: HardcodedAuthenticationService){}

  loginButton(){
    console.log(this.username)
    console.log(this.password)
    if(this.hardcoded.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }

  }
}
