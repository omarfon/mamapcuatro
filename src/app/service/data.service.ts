import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
  private apiUrl = `${this.SERVER}users/`;

  constructor(public http: HttpClient) { }

  getGenders(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + 'genders', {headers}).pipe(
              map(data =>{
                return data;
              })/* .catch(e =>{
                return Observable.of(e)
              }); */
    )
  }

  getDocuments(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + 'documenttypes', {headers}).pipe(
                  map(data =>{
                    return data;
                  })/* .catch(e =>{
                    return Observable.of(e)
                  }); */

    )
  }
}
