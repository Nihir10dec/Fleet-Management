import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject } from 'rxjs';
import { CustomerAdapter } from './customer';
import { ICustomer } from './icustomer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url="http://localhost:54492/api/";
  constructor(private http: HttpClient,private adapter:CustomerAdapter) { }

  public _subject=new BehaviorSubject<any>('');

emit(data:ICustomer)
{

  this._subject.next(data);
}

on<T>():Observable<ICustomer>
{
  return this._subject.asObservable();
}

  getCustomer(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.url+"Customer")
 }

  getCustomerByCode(id:number):Promise<ICustomer>{
  return this.http.get<ICustomer>(this.url+"Customer/"+id).toPromise();
 }
  /*pipe(
      map((data: any) => data.map((item:any) => this.adapter.adapt(item)))
  );*/
  

  updateemp(customer:ICustomer):Observable<any>{
    return this.http.put<number>(this.url+"Customer/"+customer.customerId,customer)
}

postcustomer(customer:ICustomer):Observable<any>{
  return this.http.post<any>(this.url+"Customer/",customer);
}
}

