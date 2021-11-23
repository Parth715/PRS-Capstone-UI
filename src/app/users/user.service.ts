import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:12345/api/users"
  constructor(private httpsrv: HttpClient) { }

  list(): Observable<User[]> {
    return this.httpsrv.get(`${this.baseurl}`) as Observable<User[]>
  }
}
