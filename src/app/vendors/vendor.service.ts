import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl = "http://parpate1.w32.wh-2.com/PRSB/api/vendors"
  constructor(private route:ActivatedRoute, private httpmethod: HttpClient) { }
  list(): Observable<Vendor[]>{
    return this.httpmethod.get(this.baseurl) as Observable<Vendor[]>
  }
  GetByPk(id:string): Observable<Vendor>{
    return this.httpmethod.get(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
  Delete(id:string): Observable<Vendor>{
    return this.httpmethod.delete(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
  Update(vendor: Vendor, id: string): Observable<Vendor>{
    return this.httpmethod.put(`${this.baseurl}/${id}`, vendor) as Observable<Vendor>
  }
  Insert(vendor:Vendor): Observable<Vendor>{
    return this.httpmethod.post(this.baseurl, vendor) as Observable<Vendor>
  }
}
  

