import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  public _SERVICE_BASE = "http://10.10.2.63:8080/api/";

  public _content:any;

  constructor(public http: HttpClient) {

  }
  public setContent(content) { this._content = content; }
  public getContent():any { return this._content }
  public doPost(service, data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    let url = this._SERVICE_BASE + service;

    return this.http.post(url, data, {headers: headers});
  }
  public doGet(service, data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    let url = this._SERVICE_BASE + service + data;

    return this.http.get(url, {headers: headers});
  }
}
