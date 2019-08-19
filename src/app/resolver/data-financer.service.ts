import { Injectable } from '@angular/core';
import {Resolve,  ActivatedRouteSnapshot } from '@angular/router';
import { FinancerdatesService } from '../service/financerdates.service';

@Injectable({
  providedIn: 'root'
})
export class DataFinancerService implements Resolve<any>{

  constructor( private dataSertvice: FinancerdatesService) { }

  resolve(route: ActivatedRouteSnapshot){
    let available = route.paramMap.get('available');

  /*   return this.dataSertvice.getDatos(available); */
  }
}
