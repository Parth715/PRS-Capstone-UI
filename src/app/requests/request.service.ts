import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from '../users/user';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl = "http://localhost:12345/api/requests";
  constructor(private httpmeth: HttpClient) { }
  list(): Observable<Request[]>{
    return this.httpmeth.get(this.baseurl) as Observable<Request[]>
  }
  GetByPk(requestid: string): Observable<Request>{
    return this.httpmeth.get(`${this.baseurl}/${requestid}`) as Observable<Request>
  }
  Update(request: Request): Observable<Request>{
    return this.httpmeth.put(this.baseurl, request) as Observable<Request>
  }
  Insert(request: Request): Observable<Request>{
    return this.httpmeth.post(this.baseurl, request) as Observable<Request>
  }
  GetUser(): Observable<User[]>{
  return this.httpmeth.get("http://localhost:12345/api/users") as Observable<User[]>
  }
}
