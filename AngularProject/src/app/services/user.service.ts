import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl
  constructor(
    private httpclient:HttpClient,
    private route:ActivatedRoute
  ) { }
  token=this.route.snapshot.paramMap.get('token');

  public postRequest(url:any,data:any)
  {
    return this.httpclient.post(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token')||'')})
  }
  public getRequest(url:any,data:any)
  {
    return this.httpclient.get(this.baseUrl+url);
  }
  public putRequest(url:any,data:any)
  {
    return this.httpclient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))})
  }
}
