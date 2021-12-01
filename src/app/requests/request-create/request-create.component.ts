import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request'
import { User } from '../../users/user'
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user: User = this.login.loggedinuser
  request: Request = new Request;
  
  constructor(private login: UserService, private requestsrv: RequestService, private router: Router) { }

  ngOnInit(): void {
    this.request.user = this.user;
  }
  
  Create(): void {
    this.request.userId = this.user.id
    this.requestsrv.Insert(this.request).subscribe({
      next: res => this.router.navigate(["/requestlist"]),
      error: err => console.log("Creation failed")
    })
  }
}
