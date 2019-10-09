import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(public http:HttpClient) { }
public data:{
  estado: "active"
}

  actualMomento(){
    console.log('actualMomento');
    /* return this.data */
  }
}
