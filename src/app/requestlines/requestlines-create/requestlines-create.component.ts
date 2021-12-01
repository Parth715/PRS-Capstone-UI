import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/requests/request.service';
import { Request } from 'src/app/requests/request';
import { Requestline } from 'src/app/requests/requestline';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {

  products: Product[] = [];
  request!: Request;
  RL: Requestline = new Requestline
  constructor(private requestsrv: RequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.requestsrv.GetByPk(id).subscribe({
      next: res => this.request = res,
      error: err => console.log(err)
    })
    this.requestsrv.GetProd().subscribe({
      next: res => this.products = res,
      error: err => console.log(err)
    })
  }
  save(): void {
    let id = this.route.snapshot.params["id"];
    this.requestsrv.InsertRL(this.RL).subscribe({
      next: res => this.router.navigate([`/requestlines/${id}`]),
      error: err => console.log(err)
    })
  }
}
