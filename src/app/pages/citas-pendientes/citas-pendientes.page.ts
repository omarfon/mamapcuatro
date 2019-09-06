import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../service/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas-pendientes',
  templateUrl: './citas-pendientes.page.html',
  styleUrls: ['./citas-pendientes.page.scss'],
})
export class CitasPendientesPage implements OnInit {

  public dates;

  constructor(public appointmetSrv: AppointmentService,
              public routes: Router) { }

  ngOnInit() {
    
    this.appointmetSrv.getAppointmentsPeruser().subscribe(data =>{
      return this.dates = data;
    })
  }

  goToDetailDate(date){
    const datosObj = JSON.stringify(date);
    console.log('data armada', datosObj);
    this.routes.navigate(['detailpage', datosObj]);
  }

}
