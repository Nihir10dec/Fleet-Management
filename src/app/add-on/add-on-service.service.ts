import { Injectable } from '@angular/core';
import { Ammenities } from './ammenities.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddOnServiceService {

  url="http://localhost:54492/api/";
  constructor(private http: HttpClient)  { }

  getAmmenities(): Observable<Ammenities[]>{
    return this.http.get<Ammenities[]>(this.url+"Ammenities")
  }
  
  getAmmenitiesByCode(code:number): Observable<Ammenities>{
    return this.http.get<Ammenities>(this.url+"Ammenities/"+code)
  }
}
