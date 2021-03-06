import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  vendors: Vendor[] = [];
  product: Product = new Product
  constructor(private productsrv: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productsrv.GetVen().subscribe({
      next: res => this.vendors = res,
      error: err => console.log(err)
    })
  }
  create(): void{
    this.product.vendorId = +this.product.vendorId;
    this.productsrv.Insert(this.product).subscribe({
      next: res => {
        this.product = res
        this.router.navigate(["/productlist"])},
      error: err => console.log(err)
    })
  }

}
