import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product';
import { UnivesalService } from '../univesal.service';
import { User } from '../users/user';
import { Request } from './request';
import { Requestline } from './requestline';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private httpmeth: HttpClient, private baseurl1: UnivesalService) { }
  baseurl = this.baseurl1.baseurl;
  list(): Observable<Request[]>{
    return this.httpmeth.get(`${this.baseurl}/requests`) as Observable<Request[]>
  }
  listNotMine(user: number): Observable<Request[]>{
    return this.httpmeth.get(`${this.baseurl}/requests/reviews/${user}`) as Observable<Request[]>
  }
  GetUser(): Observable<User>{
  return this.httpmeth.get(`${this.baseurl}/users`) as Observable<User>
  }
  GetRL(): Observable<Requestline[]>{
    return this.httpmeth.get(`${this.baseurl}/requestlines`) as Observable<Requestline[]>
  }
  GetProd(): Observable<Product[]> {
    return this.httpmeth.get(`${this.baseurl}/products`) as Observable<Product[]>
  }
  GetByPk(requestid: string): Observable<Request>{
    return this.httpmeth.get(`${this.baseurl}/requests/${requestid}`) as Observable<Request>
  }
  GetByPkRL(requestLNid: string): Observable<Requestline>{
    return this.httpmeth.get(`${this.baseurl}/requestlines/${requestLNid}`) as Observable<Requestline>
  }
  Update(request: Request, id: string): Observable<Request>{
    return this.httpmeth.put(`${this.baseurl}/requests/${id}`, request) as Observable<Request>
  }
  UpdateRL(RL: Requestline, id: string): Observable<Requestline>{
    return this.httpmeth.put(`${this.baseurl}/requestlines/${id}`, RL) as Observable<Requestline>
  }
  Insert(request: Request): Observable<Request>{
    return this.httpmeth.post(`${this.baseurl}/requests`, request) as Observable<Request>
  }
  Delete(id: number): Observable<Request>{
    return this.httpmeth.delete(`${this.baseurl}/requests/${id}`) as Observable<Request>
  }
  InsertRL(RL: Requestline): Observable<Requestline>{
    return this.httpmeth.post(`${this.baseurl}/requestlines`, RL) as Observable<Requestline>
  }
  DeleteRL(id: number): Observable<Request>{
    return this.httpmeth.delete(`${this.baseurl}/requestlines/${id}`) as Observable<Request>
  }
  Review(request: Request): Observable<Request>{
    return this.httpmeth.put(`${this.baseurl}/requests/review`, request) as Observable<Request>
  }
  REJECT(request: Request): Observable<Request> {
    return this.httpmeth.put(`${this.baseurl}/requests/reject`, request) as Observable<Request>
  }
  APPROVE(request:Request): Observable<Request> {
    return this.httpmeth.put(`${this.baseurl}/requests/approve`, request) as Observable<Request>
  }
}
