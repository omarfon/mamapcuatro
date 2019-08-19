import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvolucionService {

  private SERVER = 'http://dappapache02.eastus.cloudapp.azure.com:1337/api/v1/mama/';
  private apiUrl = `${this.SERVER}resumen?_sort=semana:asc`;

  constructor(private http: HttpClient) { }

  getSemanas() {
    return this.http.get(this.apiUrl + `?_sort=semana:asc`).pipe(
                      map((resp:any) =>{
                        return resp
                    })
    )
  }
  
}
