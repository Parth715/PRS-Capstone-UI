import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from '../requests/request.service';
import { UnivesalService } from '../univesal.service';
import { Vendor } from '../vendors/vendor';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpmeth: HttpClient, private baseurl1: UnivesalService) { }
  baseurl = this.baseurl1.baseurl
  list(): Observable<Product[]>{
  return this.httpmeth.get(`${this.baseurl}/products`) as Observable<Product[]>
  }
  GetByPk(id: string): Observable<Product>{
    return this.httpmeth.get(`${this.baseurl}/products/${id}`) as Observable<Product>
  }
  Update(product: Product, id:string): Observable<Product>{
    return this.httpmeth.put(`${this.baseurl}/products/${id}`, product) as Observable<Product>
  }
  Insert(product: Product): Observable<Product>{
    return this.httpmeth.post(`${this.baseurl}/products`, product) as Observable<Product>
  }
  Delete(id: string): Observable<Product>{
    return this.httpmeth.delete(`${this.baseurl}/products/${id}`) as Observable<Product>
  }
  GetVen(): Observable<Vendor[]>{
    return this.httpmeth.get(`${this.baseurl}/vendors`) as Observable<Vendor[]>
  }
}
