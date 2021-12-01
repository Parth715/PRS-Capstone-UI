import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor;
  constructor(private vendorsrv: VendorService, private router: Router) { }

  ngOnInit(): void {
  }
  add():void{
    this.vendorsrv.Insert(this.vendor).subscribe({
      next: res => {
        console.log("Created")
        this.router.navigate(["/vendorlist"])},
      error: err => console.log(err)
    })
  }
}
