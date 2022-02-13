import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnivesalService {

  baseurl = "http://parpate1.w32.wh-2.com/PRSB/api"
  //baseurl = "http://localhost:12345/api";
  constructor() { }
}
