import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnServService {

  webapiurl='http://localhost:54492/api/';
  
  constructor(private _http:HttpClient) { }
  
  getBookingById(id:number):Promise<any[]>
  {
    return this._http.get<any[]>(this.webapiurl+"booking/"+id).toPromise();
  }

  getBillingByBookkingId(s:string,id:number):Promise<any>
  {
    return this._http.get<any>(this.webapiurl+"Billing?id="+id+"&s").toPromise();
  }

  getVehicleNo(id:number):Promise<any>
  {
    return this._http.get<any>(this.webapiurl+"car/"+id).toPromise();
  }

  putCarAvailability(id:number,carobj:any):Promise<any>
  {
    return this._http.put<any>(this.webapiurl+"car/"+id,carobj).toPromise();
  }

  putBookingStatus(id:number,bookingobj:any):Promise<any>
  {
    return this._http.put<any>(this.webapiurl+"booking/"+id,bookingobj).toPromise();
  }

  putBillingDate(id:number,billingobj:any):Promise<any>
  {
    console.log("inside service")
    console.log(billingobj);
    return this._http.put<any>(this.webapiurl+"billing/"+id,billingobj).toPromise();
  }
}
