import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { AddressService } from './address.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
interface ParamsType {
  [propName: string]: any;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public data: Subject<object> = new Subject();
  public datas: Observable<object> = new Observable();

  constructor(private http: HttpClient, private address: AddressService) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
    })
  };
  /**
   * login 登录页面 登录请求 
   */
  login(data: object) {
    console.log(data);
    return this.post(this.address.login, data);
  };

  post(url: string, param: ParamsType):Observable<Object> {
    const params = new HttpParams({
      fromObject: param
    });
    return this.http.post(url, params, this.headers)
  }









}