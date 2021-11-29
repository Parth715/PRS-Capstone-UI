import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['../../users/user-create/user-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product!: Product
  constructor(private productsrv: ProductService) { }

  ngOnInit(): void {
  }
  create(): void{
    this.productsrv.Insert(this.product).subscribe({
      next: res => this.product = res,
      error: err => console.log(err)
    })
  }

}
