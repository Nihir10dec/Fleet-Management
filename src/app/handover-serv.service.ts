import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandoverServService {

  webapiurl='http://localhost:59806/api/cars'
  constructor(private _http:HttpClient) { }

  getcarsbyid(id:number):Observable<any[]>
  {
    return this._http.get<any[]>(this.webapiurl+"/"+id);
  }
}
