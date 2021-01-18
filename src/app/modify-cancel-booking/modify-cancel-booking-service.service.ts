import { Injectable } from '@angular/core';
import { ModifyCancelookingModel } from './modify-cancelooking-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyCancelBookingServiceService {

  url="http://localhost:54492/api/";
  constructor(private http: HttpClient) { }

  getBookings(): Observable<ModifyCancelookingModel[]>{
    return this.http.get<ModifyCancelookingModel[]>(this.url+"Booking")
  }
  
  getBookingByCode(code:number): Observable<ModifyCancelookingModel>{
    return this.http.get<ModifyCancelookingModel>(this.url+"Booking/"+code)
  }

  cancelBooking(bookobj:ModifyCancelookingModel):Observable<any>
  {
    return this.http.put<any>(this.url+"Booking/"+bookobj.bookingId,bookobj);
  }

  postBooking(bookobj:ModifyCancelookingModel):Observable<any>
  {
    return this.http.post<any>(this.url+"Booking/",bookobj);
  }
}
