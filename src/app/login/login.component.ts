import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  login: string = "";
  loggedinuser!: User;
  constructor(private loginsrv: LoginService) { }

  ngOnInit(): void {
  }
  verify(): void {
    this.loginsrv.Login(this.username, this.password).subscribe({
      next: res => {
        this.loggedinuser = res
        this.login = "found the user"},
      error: err => {console.log(err) 
      this.login = "Login/Password do not match"}
    })
  }
}
