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
  GetByPk(id: string):Observable<User>{
    return this.httpsrv.get(`${this.baseurl}/${id}`) as Observable<User>
  }
  Login(username: string, password: string): void{
    
  }
  Insert(user: User): Observable<User>{
    return this.httpsrv.post(`${this.baseurl}`, `${user}`) as Observable<User>
  }
  Update(user: User): void{
    this.httpsrv.put(`${this.baseurl}`, `${user}`)
  }
  Delete(id: string): void{
    this.httpsrv.delete(`${this.baseurl}/${id}`)
  }
}
