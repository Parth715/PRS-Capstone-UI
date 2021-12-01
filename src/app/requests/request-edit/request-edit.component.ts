import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request'
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class RequestEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private requestsrv: RequestService, private router: Router) { }

  users: User = new User
  request!: Request;
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.requestsrv.GetByPk(id).subscribe({
      next: res => this.request = res,
      error: err => console.log(err)
    })
    this.requestsrv.GetUser().subscribe({
      next: res => this.users = res,
      error: err => console.log(err)
    })
  }
  save(): void{
    let id = this.route.snapshot.params["id"];
    this.requestsrv.Update(this.request, id).subscribe({
      next: res => this.router.navigate(["/requestlist"]),
      error: err => console.log(err)
    })
  }
}
