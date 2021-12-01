import { Component, OnInit } from '@angular/core';
import { RequestService } from '../requests/request.service';
import { Requestline } from '../requests/requestline';
import { Request } from '../requests/request';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../users/user.service';
import { User } from '../users/user';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  user: User = this.loggedin.loggedinuser;
  requests: Request[] = [];
  constructor(private requestsrv: RequestService, private loggedin: UserService) { }
  
  ngOnInit(): void {
    let id = this.user.id.toString()
    this.requestsrv.listNotMine(id).subscribe({
      next: res => this.requests = res,
      error: err => console.log(err)
    })
  }

}
