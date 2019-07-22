import { Injectable } from '@angular/core';

import { Router, UrlHandlingStrategy } from '@angular/router';

import { environment } from 'src/environments/environment';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl=environment.baseUrl;
  constructor(private httpclient : HttpClient, private route:Router) { }

  
public postRequest(url:any,data:any)
{
  return this.httpclient.post(this.baseUrl+url,data,{headers: new HttpHeaders().set("token",localStorage.getItem('token'))})
}
public putRequest(url:any,data:any)
{
  return this.httpclient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set("token",localStorage.getItem("token"))})
}
public getRequest(url:any)
{
  return this.httpclient.get(this.baseUrl+url,{headers: new HttpHeaders().set("token",localStorage.getItem("token"))});
}
public deleteRequest(url:any,data:any)
{
  return this.httpclient.delete(this.baseUrl+url,data); 
}



}

  