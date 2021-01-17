import { Injectable } from '@angular/core';
import { LocationSelection } from './location-selection';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationSelectionServiceService {

  url="http://localhost:54492/api/";
  constructor(private http: HttpClient)  { }

  getLocations(): Observable<LocationSelection[]>{
    return this.http.get<LocationSelection[]>(this.url+"Hub")
  }
  
  getLocationByCode(code:number): Observable<LocationSelection>{
    return this.http.get<LocationSelection>(this.url+"Hub/"+code)
  }

  getLocationByCityId(id:number) : Observable<LocationSelection[]>{
    return this.http.get<LocationSelection[]>(this.url+"Hub/city?city&cityId=" + id)
  }
}