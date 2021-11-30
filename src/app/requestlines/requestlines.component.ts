import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../requests/request.service';
import { Request } from '../requests/request';
import { Requestline } from '../requests/requestline';

@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['../requests/request-list/request-list.component.css']
})
export class RequestlineComponent implements OnInit {

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
  deleteRL(): void{
    let id = this.route.snapshot.params["id"]
    this.requestsrv.Delete(id).subscribe({
      next: res => console.log("deleted"),
      error: err => console.log(err)
    })
  }

}
