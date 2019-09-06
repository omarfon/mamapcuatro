import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CulqiService {

  constructor(public http:HttpClient) { }

  /* private apiUrlCulqi = 'https://api.aviva.pe/middleware2/api/v2/ebooking/culqi-charges'; */
  private apiUrlCulqi = 'https://api.aviva.pe/middleware2-copy/api/v2/ebooking/culqi-charges';
  /* private apiUrlCulqi = 'https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/ebooking/culqi-charges'; */

  charges(data ){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    let params = data;
    return this.http.post(this.apiUrlCulqi , params, {headers}).pipe(
                  map(data =>{
                    return data;
                  })
                )
            }

}
