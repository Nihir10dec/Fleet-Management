// import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {  BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public _subject = new BehaviorSubject<any>({});

  url = "http://localhost:54492/api/";

  constructor(private http: HttpClient) { }

  validateEmployee(obj) : Promise<any>{
    return this.http.post<any>(this.url+"Employee/validate?method=validate" , obj).toPromise();    
  }

  async emit<T>(data :T){
    this._subject.next(data);
  }

  on<T>(): Observable<T>{
    return this._subject.asObservable();
  }

  // async isStaffLoggedIn(obj){
  //   const loggedin = await this.http.post<any>(this.url+"Employee/validate?method=validate" , obj).toPromise();
  //   console.log(loggedin);
  // }
}
