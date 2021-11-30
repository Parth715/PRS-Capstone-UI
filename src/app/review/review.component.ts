import { Component, OnInit } from '@angular/core';
import { RequestService } from '../requests/request.service';
import { Requestline } from '../requests/requestline';
import { Request } from '../requests/request';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['../users/user-create/user-create.component.css']
})
export class ReviewComponent implements OnInit {

  
  requests: Request[] =[]
  RL: Requestline[]=[];
  constructor(private requestsrv: RequestService) { }

  ngOnInit(): void {
    this.requestsrv.GetRL().subscribe({
      next: res => this.RL = res,
      error: err => console.log(err)
    })
    this.requestsrv.list().subscribe({
      next: res => this.requests = res,
      error: err => console.log(err)
    })
  }

}
