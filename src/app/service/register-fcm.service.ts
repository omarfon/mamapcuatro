import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterFcmService {

  public server = API_ENDPOINT;
  public apiUrl = `${this.server}auth/fcm-register`;


  constructor(public http: HttpClient) { }

  registerToken(token){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({'Authorization': authorization});

    let params = {token: token}
    return this.http.post(this.apiUrl, params, {headers}).pipe(
      map(data =>{
        return data
      })
    )
  }
}
