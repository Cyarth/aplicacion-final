
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {headersToString} from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient ) { }

  post(serviceName: string, data:any){
    const header = new HttpHeaders();
    const options = { header: headersToString, withCredentials: false}

    const url = environment.api+serviceName;

    return this.http.post(url, JSON.stringify(data),options);
  }
}
