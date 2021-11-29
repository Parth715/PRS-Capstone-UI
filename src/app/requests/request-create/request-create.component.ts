import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request'
import { User } from '../../users/user'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  users: User[] = []
  request: Request = new Request();
  constructor(private requestsrv: RequestService) { }

  ngOnInit(): void {
    this.requestsrv.GetUser().subscribe({
      next: res => this.users = res,
      error: err => console.log(err)
    })
  }
  Create(): void {
    this.requestsrv.Insert(this.request).subscribe({
      next: res => console.log("Created"),
      error: err => console.log("Creation failed")
    })
  }
}
