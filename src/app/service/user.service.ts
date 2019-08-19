import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
  private apiUrl = `${this.SERVER}`;
  private apiUrlDatos = `${this.SERVER}ebooking/`;

  constructor( public http: HttpClient) { }

  doSignIn(email, password){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({'Authorization': authorization});

    let params = {email: email, password: password}
      return this.http.post(this.apiUrl + 'users/login', params, {headers}).pipe( 
              map(data =>{
              return data
        })
      )
  }

  doSignInforNewRegister(email, password){
    let params = {email:email, password: password , captchaId: "4dbc9e7e-a921-4d1f-8e36-1021a670c47a"}
    // let params = {email:email, password: shajs('sha256').update(password).digest('hex') }
    return this.http.post(this.apiUrl + 'login', params).pipe(
                  map(data =>{
                    return data
                  })
    )
  }
  doSignUp(params){
    return this.http.post(this.apiUrl + 'register', params).pipe(
                  map( data =>{
                    return data
                  })
    )
  }

  sendValidation(email){
    let params = {email: email};
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    console.log('params:', params);
    return this.http.post(this.apiUrl + 'users/validate-email/recovery', params, {headers}).pipe(
                    map(data =>{
                      return data
                    })/* .catch(e => {
                      return Observable.of(e)
                    }); */

    )
  }

  recoveryLogin(datos){
    let params = {code: datos.code, email: datos.email, id: datos.id, password: datos.password, app: 'ebooking'};
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.post(this.apiUrl + 'login-recovery', params, {headers}).pipe(
                    map(data => {
                      return data
                    })/* .catch(e =>{
                      return Observable.of(e)
                    }); */
    )
  }

  changePassword(password, passwordNew){
    let params = {password: password, passwordNew: passwordNew };
    // console.log('los paramasque cambian la contraseña:', params);
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.put(this.apiUrl + 'update-password', params, {headers}).pipe(
                    map(data => {
                      return data
                      
                    })/* .catch(e =>{
                      return Observable.of(e)
                    }); */

    )
  }

  getDatosPaciente(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});
    return this.http.get(this.apiUrlDatos + `datos-paciente`, {headers}).pipe(
                    map(data => {
                      return data
                    })/* .catch(e =>{
                      return Observable.of(e)
                    }); */

    )
  }

}
