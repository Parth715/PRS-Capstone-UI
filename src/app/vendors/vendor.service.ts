import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UnivesalService } from '../univesal.service';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor(private route:ActivatedRoute, private httpmethod: HttpClient, private baseurl1: UnivesalService) { }
  baseurl = this.baseurl1.baseurl;
  list(): Observable<Vendor[]>{
    return this.httpmethod.get(`${this.baseurl}/vendors`) as Observable<Vendor[]>
  }
  GetByPk(id:string): Observable<Vendor>{
    return this.httpmethod.get(`${this.baseurl}/vendors/${id}`) as Observable<Vendor>
  }
  Delete(id:string): Observable<Vendor>{
    return this.httpmethod.delete(`${this.baseurl}/vendors/${id}`) as Observable<Vendor>
  }
  Update(vendor: Vendor, id: string): Observable<Vendor>{
    return this.httpmethod.put(`${this.baseurl}/vendors/${id}`, vendor) as Observable<Vendor>
  }
  Insert(vendor:Vendor): Observable<Vendor>{
    return this.httpmethod.post(`${this.baseurl}/vendors`, vendor) as Observable<Vendor>
  }
}
  

