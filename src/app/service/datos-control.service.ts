import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
/* import 'rxjs/add/operator/catch'; */

@Injectable({
  providedIn: 'root'
})
export class DatosControlService {

  private SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
  apiUrl = `${this.SERVER}ebooking/getDiagnosticoEmbarazoEnCurso`;
  apiUrlStart = `${this.SERVER}ebooking/getSoloDiagnosticoEmbarazoEnCurso`;

  constructor(public http:HttpClient) { }

  getStartPregnacy(){
 
    const authorization = localStorage.getItem('authorization');
      let headers = new HttpHeaders({"Authorization": authorization});
  
    return this.http.get(this.apiUrlStart , {headers}).pipe(

                map(data =>{
                  return data
                })/* .catch( e =>{
                  return Observable.of(e) 
                }) */
    )
                    
  }
  
  getParams( fromDate , toDate){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    console.log(headers);
    console.log('las fechas:', fromDate, toDate);
    return this.http.get(this.apiUrl + `?fechaIni=${fromDate}&fechaFin=${toDate}` , {headers}).pipe(  
            map(data =>{
              return data
            })/* .catch( e =>{
              return Observable.of(e) 
              }); */
            )
  }
}
