import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users/user';
import { UserService } from '../users/user.service';


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
  constructor(private router:Router,private usersrv: UserService) { }

  ngOnInit(): void {
  }
  verify(): void {
    this.usersrv.Login(this.username, this.password).subscribe({
      next: res => {
        this.loggedinuser = res
        this.router.navigate(["/requestlist"])},
      error: err => {console.log(err) 
      this.login = "Login/Password do not match"}
    })
  }
}
