import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* import { Observable } from 'rxjs/Observable'; */
import {map} from 'rxjs/operators';
/* import 'rxjs/add/operator/catch'; */

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  servicios: any[] = [];
  doctores: any[] = [];

  private SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
  private apiUrl = `${this.SERVER}`;

  constructor( public http: HttpClient) { }

  getServicios( ){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    const center_id = 1;
    return this.http.get(this.apiUrl + `ebooking/fmt-centers/${center_id}/services`, {headers}).pipe(
                        map((resp:any)=>{
                          return resp;
                      })/* .catch(e =>{
                        return Observable.of(e)
                      }) */

    )
  }


  getDoctorsPerId(id){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    const center_id = 1;

    return this.http.get(this.apiUrl + `ebooking/fmt-centers/${center_id}/services/${id}/professionals` ,  {headers}).pipe(
                    map((resp:any)=>{
                    this.doctores = resp.centers[0].services[0].professionals;
                    return this.doctores;
                    })/* .catch(e =>{
                      return Observable.of(e)
                    }) */
    )
  }

  /*  getAvailablesPerDay(serviceId ,fromDate, toDate){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({
      "Authorization": authorization
    });
    // headers.append("Authorization", authorization);
    let params = {query: `query {centers{service(id:${serviceId}){id ,professionals{id, fullName, cmp, image, service{id, description }, availables(fromDateString:"${fromDate}",toDateString:"${toDate}"){date,hours{ hour, listjson}}}}}}`};
    return this.http.post(this.apiUrl, params, {headers})
                    .map((resp:any)=>{
                      return resp.data.centers[0].service.professionals;
                    });
  } */

  getAvailablesPerDoctor(id, serviceId, fromDate, toDate){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    const center_id = 1;
    return this.http.get(this.apiUrl + `ebooking/fmt-centers/${center_id}/services/${serviceId}/professionals/${id}/availables?from_date=${fromDate}&to_date=${toDate}`,  {headers}).pipe(
                      map((resp:any)=>{
                /*              console.log('resp:', resp); */
                        return resp.centers[0].services[0].professionals[0].availables;
                        // return resp;
                      })/* .catch(e =>{
                        return Observable.of(e)
                      }) */

    )
  }
}
