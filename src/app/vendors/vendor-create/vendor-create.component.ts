import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor!: Vendor
  constructor(private vendorsrv: VendorService) { }

  ngOnInit(): void {
  }
  add():void{
    this.vendorsrv.Insert(this.vendor).subscribe({
      next: res => console.log("Created"),
      error: err => console.log(err)
    })
  }
}
