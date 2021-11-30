import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { Requestline } from '../requestline';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['../request-list/request-list.component.css']
})
export class RequestDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private requestsrv: RequestService ) { }

  requestlines!: Requestline[]

  request!: Request
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    this.requestsrv.GetByPk(id).subscribe({
      next: res => this.request = res,
      error: err => console.log(err)
    })
    

  }

}
