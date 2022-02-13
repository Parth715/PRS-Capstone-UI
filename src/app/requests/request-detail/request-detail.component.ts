import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { Requestline } from '../requestline';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class RequestDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private requestsrv: RequestService, private router: Router ) { }

  requestlines!: Requestline[]

  request!: Request
  ngOnInit(): void {
    this.refresh();
  }
  delete():void{
    let id = +this.route.snapshot.params["id"]
    this.requestsrv.Delete(id).subscribe({
      next: res => this.router.navigate(["/requestlist"]),
      error: err => console.log(err)
    })
  }
  refresh(): void {
    let id = this.route.snapshot.params["id"]
    this.requestsrv.GetByPk(id).subscribe({
      next: res => {this.request = res
      },
      error: err => console.log(err)
    })
  }
}
