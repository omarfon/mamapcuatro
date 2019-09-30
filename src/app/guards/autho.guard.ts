import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthoGuard  implements CanActivate {

  constructor(public router: Router){}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean{
        if(localStorage.getItem('role') == "public" ){
          this.router.navigate(['login']);
          return false;
        }else{
          return true
        }
      }
    
}
