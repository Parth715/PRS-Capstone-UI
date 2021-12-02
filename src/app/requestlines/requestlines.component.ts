import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../requests/request.service';
import { Request } from '../requests/request';
import { Requestline } from '../requests/requestline';

@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['../requests/request-list/request-list.component.css']
})
export class RequestlineComponent implements OnInit {

  constructor(private route: ActivatedRoute, private requestsrv: RequestService, private router: Router ) { }

  requestlines!: Requestline[]

  request!: Request
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    this.requestsrv.GetByPk(id).subscribe({
      next: res => this.request = res,
      error: err => console.log(err)
    })
  }
  deleteRL(id: number): void {
    let page = this.route.snapshot.params["id"]
    let ids = id.toString()
    this.requestsrv.DeleteRL(ids).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
    this.requestsrv.Review(this.request).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
    this.router.navigate(["/requestline/{{page}}"])
  }
  review(): void {
    this.requestsrv.Review(this.request).subscribe({
      next: res => this.request = res,
      error: err => console.log(err)
    })
    this.router.navigate(["/requestlist"])
  }

}
