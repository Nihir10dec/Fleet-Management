import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Billing } from './billing';

@Injectable({
  providedIn: 'root'
})
export class BillingServService {

  webapiurl='http://localhost:54492/api';
  constructor(private _http:HttpClient) { }

  getBillings():Observable<Billing[]>
  {
    return this._http.get<Billing[]>(this.webapiurl);
  }

  getBillingById(id:number):Observable<Billing>
  {
    return this._http.get<Billing>(this.webapiurl+'/billing'+id);
  }

  postBilling(billingobj:Billing):Observable<any>
  {
    return this._http.post<any>(this.webapiurl+'/billing',billingobj);
  }

  deleteBilling(id:number):Observable<any>
  {
    return this._http.delete<any>(this.webapiurl+'/billing'+id);
  }

  putBillingById(billingobj:Billing):Observable<Billing>
  {
    return this._http.put<any>(this.webapiurl+'/billing'+billingobj.billingId,billingobj);
  }

  public __subject=new BehaviorSubject<any>('');
  emit<T>(data:T)
  {
    this.__subject.next(data);
  }
  on<T>():Observable<T>
  {
    return this.__subject.asObservable();
  }
}
