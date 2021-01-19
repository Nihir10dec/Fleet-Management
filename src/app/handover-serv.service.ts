import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandoverServService {

  webapiurl='http://localhost:54492/api/';
  
  constructor(private _http:HttpClient) { }

  getBookingById(id:number):Promise<any[]>
  {
    return this._http.get<any[]>(this.webapiurl+"booking/"+id).toPromise();
  }

  getcarsbycategory(id:number):Observable<any[]>
  {
    return this._http.get<any[]>(this.webapiurl+"car?category&category_id="+id);
  }

  updateBooking(id: number , bookingobj):Promise<any[]>
  {
    return this._http.put<any[]>(this.webapiurl + "/booking/" + id , bookingobj).toPromise();
  }

}
