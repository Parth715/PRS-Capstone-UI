import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product';
import { RequestService } from 'src/app/requests/request.service';
import { Requestline } from 'src/app/requests/requestline';

@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class RequestlinesEditComponent implements OnInit {

  products: Product[] = [];
  id = "";
  RL!: Requestline;
  constructor(private route:ActivatedRoute, private requestsrv: RequestService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.requestsrv.GetByPkRL(id).subscribe({
      next: res => {
        this.RL = res
        id = this.RL.id
      }
    })
    this.requestsrv.GetProd().subscribe({
      next: res => this.products = res,
      error: err => console.log(err)
    })
  }
  save(): void{
    let id = this.route.snapshot.params["id"];
    let requestid = this.route.snapshot.params["requestid"];
    this.requestsrv.UpdateRL(this.RL, id).subscribe({
      next: res => console.log("update the status to REVIEW after pressing the save button"),
      error: err => console.log(err)
    })
    this.router.navigate([`/requestlines/${requestid}`])
  }
}
