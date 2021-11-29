import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [] 
  constructor(private requestsrv: RequestService) { }

  ngOnInit(): void {
    this.requestsrv.list().subscribe({
      next: res => this.requests = res,
      error: err => console.log(err)
    })
  }

}
