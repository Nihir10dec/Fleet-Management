import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billing } from '../billing';
import { CarCategories } from '../car-categories';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  url="http://localhost:54492/api/";
  constructor(private http: HttpClient) { }

  getBillingIdByCode(code:number): Observable<Billing>{
    return this.http.get<Billing>(this.url+"Billing/"+code)
  }

  getCarCategorybyCode(code:number): Observable<CarCategories>{
    return this.http.get<CarCategories>(this.url+"CarCategories/"+code)
  }
}
