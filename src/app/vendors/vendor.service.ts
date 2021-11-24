import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendors } from './vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl = "http://localhost:12345/api/vendors"
  constructor(private route:ActivatedRoute, private httpmethod: HttpClient) { }
  list(): Observable<Vendors[]>{
    return this.httpmethod.get(this.baseurl) as Observable<Vendors[]>
  }
}
  

