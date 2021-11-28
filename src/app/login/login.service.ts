import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl: string = "http://localhost:12345/api/users"
  constructor(private httpmeth: HttpClient) { }
  Login(user: string, pass: string): Observable<User>{
    return this.httpmeth.get(`${this.baseurl}/${user}/${pass}`) as Observable<User>
  }
}
