import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productsrv: ProductService) { }

  product!:Product 
  ngOnInit(): void {
    let productid = this.route.snapshot.params["id"];
    this.productsrv.GetByPk(productid).subscribe({
      next: res => this.product = res,
      error: err => console.log(err)
    })
  }

}
