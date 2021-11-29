import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productsrv: ProductService) { }

  product!: Product;
  ngOnInit(): void {
    let productid = this.route.snapshot.params["id"];
    this.productsrv.GetByPk(productid).subscribe({
      next: res => this.product = res,
      error: err => console.log(err)
    })
  }
  save(): void{
    this.productsrv.Update(this.product).subscribe({
      next: res => this.product = res,
      error: err => console.log(err)
    })
  }

}
