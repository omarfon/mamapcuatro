import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  /* private SERVER = Constants.API_ENDPOINT; */
  private SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
  apiUrl = `${this.SERVER}users/public-authorization`;

  constructor(private http:HttpClient) { }

  getKey(){
    return this.http.get(this.apiUrl).pipe(
      map(data =>{
        return data
      })
    )
  }

}
