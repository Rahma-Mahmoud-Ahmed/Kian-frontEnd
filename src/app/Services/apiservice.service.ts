import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private httpOptions = {};
  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({



      }),
    };
    }


    getAllemployee(): Observable<any> {
      return this.httpclient.get(`${environment.APIBaseURL}`);
    }
    ActivateEmployee(param: any , id: any ): Observable<any> {
      return this.httpclient.put<any>(`${environment.APIBaseURL}/${id}`, param, this.httpOptions)

    }
    createEmployee(data:any): Observable<any> {
      return this.httpclient.post(`${environment.APIBaseURL}`,data)
    }
    updateEmployee(param: any , id: any): Observable<any>{
      let ids=id;
      debugger
      return this.httpclient.put<any>(`${environment.APIBaseURL}/${ids}`, param, this.httpOptions)
    }
    deleteEmployee(id:number): Observable<any>{
      return this.httpclient.delete<any>(`${environment.APIBaseURL}/${id}`)
    }
  }
