import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { CarCategories } from './car-categories';

@Injectable({
  providedIn: 'root'
})
export class CarServService {

  webapiurl='http://localhost:54492/api/CarCategories';
  constructor(private _http:HttpClient) { }

  getCarCategories():Observable<CarCategories[]>
  {
    return this._http.get<CarCategories[]>(this.webapiurl);
  }

  getCarCategoryById(id : number):Promise<CarCategories>
  {
    return this._http.get<CarCategories>(this.webapiurl + "/" + id).toPromise();
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
