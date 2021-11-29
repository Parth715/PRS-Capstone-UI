import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor
  constructor(private route: ActivatedRoute, private vendorsrv: VendorService) { }

  ngOnInit(): void {
    let vendorid = this.route.snapshot.params["id"]
    this.vendorsrv.GetByPk(vendorid).subscribe({
      next: res => this.vendor = res,
      error: err => console.log(err)
    })
  }
  del():void{
    let vendorid = this.route.snapshot.params["id"]
    this.vendorsrv.Delete(vendorid).subscribe({
      next: res => console.log("Deleted"),
      error: err => console.log(err)
    })
  }
}
