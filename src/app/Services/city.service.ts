import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from '../data/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpclient:HttpClient) { }
  SaveCity(obj:city):Observable<any>{
    return this.httpclient.post("http://localhost/FinalExam/api/City/Insert", obj);
  }
  LoadCity(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/FinalExam/api/City/GetCities?countryid="+id)
  }
  DeleteCity(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/FinalExam/api/City/Delete?id="+id)
  }
}
