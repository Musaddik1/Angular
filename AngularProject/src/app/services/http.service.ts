import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl
  constructor(private httpclient: HttpClient, private route: ActivatedRoute) { }
  token = this.route.snapshot.paramMap.get('token');

  public postRequest(url: any, data: any): any {
    return this.httpclient.post(this.baseUrl + url, data);
  }
  public getRequest(url: any): any {
    return this.httpclient.get(this.baseUrl + url);
  }

  public putRequest(url: any,data:any): any {
    return this.httpclient.put(this.baseUrl + url,data);
  }

}
