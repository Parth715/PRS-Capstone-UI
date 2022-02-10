import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendors/vendor';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl="http://parpate1.w32.wh-2.com/PRSB/api/products"
  constructor(private httpmeth: HttpClient) { }
  list(): Observable<Product[]>{
  return this.httpmeth.get(this.baseurl) as Observable<Product[]>
  }
  GetByPk(id: string): Observable<Product>{
    return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Product>
  }
  Update(product: Product, id:string): Observable<Product>{
    return this.httpmeth.put(`${this.baseurl}/${id}`, product) as Observable<Product>
  }
  Insert(product: Product): Observable<Product>{
    return this.httpmeth.post(this.baseurl, product) as Observable<Product>
  }
  Delete(id: string): Observable<Product>{
    return this.httpmeth.delete(`${this.baseurl}/${id}`) as Observable<Product>
  }
  GetVen(): Observable<Vendor[]>{
    return this.httpmeth.get("http://localhost:12345/api/vendors") as Observable<Vendor[]>
  }
}
