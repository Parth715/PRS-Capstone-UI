import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product';
import { User } from '../users/user';
import { Request } from './request';
import { Requestline } from './requestline';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl = "http://parpate1.w32.wh-2.com/PRSB/api/requests";
  constructor(private httpmeth: HttpClient) { }
  list(): Observable<Request[]>{
    return this.httpmeth.get(this.baseurl) as Observable<Request[]>
  }
  listNotMine(user: string): Observable<Request[]>{
    return this.httpmeth.get(`${this.baseurl}/reviews/${user}`) as Observable<Request[]>
  }
  GetUser(): Observable<User>{
  return this.httpmeth.get("http://parpate1.w32.wh-2.com/PRSB/api/users") as Observable<User>
  }
  GetRL(): Observable<Requestline[]>{
    return this.httpmeth.get("http://parpate1.w32.wh-2.com/PRSB/api/requestlines") as Observable<Requestline[]>
  }
  GetProd(): Observable<Product[]> {
    return this.httpmeth.get("http://parpate1.w32.wh-2.com/PRSB/api/products") as Observable<Product[]>
  }
  GetByPk(requestid: string): Observable<Request>{
    return this.httpmeth.get(`${this.baseurl}/${requestid}`) as Observable<Request>
  }
  GetByPkRL(requestLNid: string): Observable<Requestline>{
    return this.httpmeth.get(`http://parpate1.w32.wh-2.com/PRSB/api/requestlines/${requestLNid}`) as Observable<Requestline>
  }
  Update(request: Request, id: string): Observable<Request>{
    return this.httpmeth.put(`${this.baseurl}/${id}`, request) as Observable<Request>
  }
  UpdateRL(RL: Requestline, id: string): Observable<Requestline>{
    return this.httpmeth.put(`http://parpate1.w32.wh-2.com/PRSB/api/requestlines/${id}`, RL) as Observable<Requestline>
  }
  Insert(request: Request): Observable<Request>{
    return this.httpmeth.post(this.baseurl, request) as Observable<Request>
  }
  InsertRL(RL: Requestline): Observable<Requestline>{
    return this.httpmeth.post(`http://parpate1.w32.wh-2.com/PRSB/api/requestlines`, RL) as Observable<Requestline>
  }
  Delete(id: string): Observable<Request>{
    return this.httpmeth.delete(`${this.baseurl}/${id}`) as Observable<Request>
  }
  DeleteRL(id: string): Observable<Request>{
    return this.httpmeth.delete(`http://parpate1.w32.wh-2.com/PRSB/api/requestlines/${id}`) as Observable<Request>
  }
  Review(request: Request): Observable<Request>{
    return this.httpmeth.put(`${this.baseurl}/review`, request) as Observable<Request>
  }
  REJECT(request: Request): Observable<Request> {
    return this.httpmeth.put(`${this.baseurl}/reject`, request) as Observable<Request>
  }
  APPROVE(request:Request): Observable<Request> {
    return this.httpmeth.put(`${this.baseurl}/approve`, request) as Observable<Request>
  }
}
