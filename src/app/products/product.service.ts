import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl="http://localhost:12345/api/products"
  constructor(private httpmeth: HttpClient) { }
  list(): Observable<Product[]>{
  return this.httpmeth.get(this.baseurl) as Observable<Product[]>
  }
  GetByPk(id: string): Observable<Product>{
    return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Product>
  }
  Update(product: Product): Observable<Product>{
    return this.httpmeth.put(this.baseurl, product) as Observable<Product>
  }
}
