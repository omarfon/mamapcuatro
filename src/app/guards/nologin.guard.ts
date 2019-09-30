import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(public router: Router){}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean{
        if(!localStorage.getItem('role') ){
          return true;
        }else{
          this.router.navigate(['tabs']);
          return false
        }
      }
  
}
