import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendors } from '../vendors';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendors[] = []
  constructor(private vendorsrv: VendorService) { }

  ngOnInit(): void {
    this.vendorsrv.list().subscribe({
      next: res => this.vendors = res,
      error: err => console.log(err)
    })
  }

}
