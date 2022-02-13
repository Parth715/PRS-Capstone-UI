import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnivesalService } from '../univesal.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedinuser!: User
  constructor(private httpmethod: HttpClient, private baseurl1: UnivesalService) { }
  baseurl = this.baseurl1.baseurl;
  list(): Observable<User[]> {
    return this.httpmethod.get(`${this.baseurl}/users`) as Observable<User[]>
  }
  GetByPk(id: string):Observable<User>{
    return this.httpmethod.get(`${this.baseurl}/users/${id}`) as Observable<User>
  }
  Login(username: string, password: string): Observable<User>{
      return this.httpmethod.get(`${this.baseurl}/users/${username}/${password}`) as Observable<User>
    }
  Insert(user: User): Observable<User>{
      return this.httpmethod.post(`${this.baseurl}/users`, user) as Observable<User>
  }
  Update(user: User, id:string): Observable<User>{
    return this.httpmethod.put(`${this.baseurl}/users/${id}`, user) as Observable<User>
  }
  Delete(id: string): Observable<User>{
    return this.httpmethod.delete(`${this.baseurl}/users/${id}`) as Observable<User>
  }
}
