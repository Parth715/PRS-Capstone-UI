import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/requests/request.service';
import { Request } from 'src/app/requests/request';

@Component({
  selector: 'app-review1',
  templateUrl: './review1.component.html',
  styleUrls: ['./review.css']
})
export class Review1Component implements OnInit {

  constructor(private requestsrv: RequestService, private route: ActivatedRoute, private router: Router) { }

  show = false
  request: Request = new Request
  ngOnInit(): void {
    let requestid = this.route.snapshot.params["id"];
    this.requestsrv.GetByPk(requestid).subscribe({
      next: res => this.request = res,
      error: err => console.log(err)
    })
  }
  approve(): void {
    this.requestsrv.APPROVE(this.request).subscribe({
      next: res => this.router.navigate(["/review"]),
      error: err => console.log(err)
    })
  }
  reject(): void{
    let R:any = document.getElementById("reject");
    R.style.display = "block";
  }
  verifyreject(): void {
        this.requestsrv.REJECT(this.request).subscribe({
          next: res => this.router.navigate(["/review"]),
          error: err => console.log(err) 
        })
  }
}
