import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private SERVER = 'http://dappapache02.eastus.cloudapp.azure.com:1337/api/v1/mama/';
  private apiUrl = `${this.SERVER}`;
  private apiUrlFilter = `${this.SERVER}`;
  private apiUrlSemana = `${this.SERVER}notas-por-semana?semana=`;



  constructor(public http: HttpClient) { }

  getNotes(){
    return this.http.get(this.apiUrl + 'notas-por-semana?_sort=semana:desc').pipe(
      map((resp:any)=>{
        return resp
      })
    )
  }
  getNotesFilter(elfiltro){
    console.log('el filtro en home:', elfiltro);
    return this.http.get(this.apiUrlFilter + `${elfiltro}?_sort=semana:desc`).pipe(
                  map((resp:any) =>{
                      return resp
                  })
      
                )
          }

  getNota(semana){
    return this.http.get(this.apiUrlSemana + `${semana}`).pipe(
                     map((resp:any) => {
                        return resp;
                      })
                      )
                    }
}
