import { ICity } from './Icity';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import { IState } from './IState';


@Injectable({
  providedIn: 'root'
})
export class StatecityService {
  url = "http://localhost:54492/api/";

  constructor(private http: HttpClient) { }

  getStates() : Promise<IState[]>{
    return this.http.get <IState []> (this.url + "state").toPromise();
  }

  getCities() : Promise<ICity[]>{
    return this.http.get <ICity []> (this.url + "city").toPromise();
  }
}
