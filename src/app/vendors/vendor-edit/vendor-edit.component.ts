import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor
  constructor(private route: ActivatedRoute, private vendorsrv: VendorService) { }

  ngOnInit(): void {
    let vendorid = this.route.snapshot.params["id"]
    this.vendorsrv.GetByPk(vendorid).subscribe({
      next: res => this.vendor = res,
      error: err => console.log(err)
    })
  }
save(): void{
  let vendorid = this.route.snapshot.params["id"]
  this.vendorsrv.Update(this.vendor, vendorid).subscribe({
    next: res => console.log("updated"),
    error: err => console.log(err)
  })
}
}
