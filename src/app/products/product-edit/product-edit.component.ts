import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productsrv: ProductService, private router: Router) { }

  vendors: Vendor[]= []
  product!: Product;
  ngOnInit(): void {
    let productid = this.route.snapshot.params["id"];
    this.productsrv.GetByPk(productid).subscribe({
      next: res => this.product = res,
      error: err => console.log(err)
    })
    this.productsrv.GetVen().subscribe({
      next: res => {
        this.vendors = res
        },
      error: err => console.log(err)
    })
  }
  save(): void{
    let productid = this.route.snapshot.params["id"];
    this.productsrv.Update(this.product, productid).subscribe({
      next: res => {
        console.log(res);
        this.router.navigate(["/productlist"])},
      error: err => console.log(err)
    })
  }

}
