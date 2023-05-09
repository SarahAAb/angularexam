import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { country } from '../data/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpclient:HttpClient) { }
  SaveCountry(obj:country):Observable<any>{
    return this.httpclient.post("http://localhost/FinalExam/api/Country/Insert", obj);
  }
  GetCountry():Observable<any>{
    return this.httpclient.get("http://localhost/FinalExam/api/Country/GetAll")
  }
  Search(name:string):Observable<any>{
    return this.httpclient.get("http://localhost/FinalExam/api/Country/Search?name="+name)
  }
}
