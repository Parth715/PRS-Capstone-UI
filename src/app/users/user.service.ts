import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:12345/api/users"
  constructor(private httpmethod: HttpClient) { }

  list(): Observable<User[]> {
    return this.httpmethod.get(`${this.baseurl}`) as Observable<User[]>
  }
  GetByPk(id: string):Observable<User>{
    return this.httpmethod.get(`${this.baseurl}/${id}`) as Observable<User>
  }
  Login(username: string, password: string): void{

  }
  Insert(user: User): Observable<User>{
  
    return this.httpmethod.post(`${this.baseurl}`, `${user}`) as Observable<User>
  }
  Update(user: User): Observable<User>{
    return this.httpmethod.put(this.baseurl, user) as Observable<User>
  }
  Delete(id: string): Observable<User>{
    return this.httpmethod.delete(`${this.baseurl}/${id}`) as Observable<User>
  }
}
