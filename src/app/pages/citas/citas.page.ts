import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CitasService } from './../../service/citas.service';
import { LoadingController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { FinancerdatesService } from '../../service/financerdates.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  c: any;
  servicios: any;
  disponibles: boolean;
  doctors: any;
  doctorsF: any;
  id: any;
  fromDate: any;
  toDate: any;
  horas: any;
  dia: any;
  dias: any;
  selectedDay: any;
  hora: any;

  public available;

  itemExpanded: boolean = true;
  itemExpandHeight: number = 220;
  changueColor: Boolean = false;

  constructor(public routes: Router,
              public route: ActivatedRoute,
              public citasSrv: CitasService,
              public loadingCtrl: LoadingController,
              public nav: NavController,
              public finanSrv: FinancerdatesService) { }

  ngOnInit() {
    this.c = this.route.snapshot.paramMap.get('c');
    console.log(this.c);
    this.id=38;


          this.fromDate = moment().format('YYYY-MM-DD');
          this.toDate = moment(this.fromDate).add(6, 'days').format('YYYY-MM-DD');

    this.getDoctors();
  }

  getDoctors(){
    /* let loading = this.loadingCtrl.create({
                content: 'por favor espere'
              });
            loading.present(); */

          this.citasSrv.getServicios().subscribe ( servicios =>{
          this.servicios = servicios;
              });
    this.citasSrv.getDoctorsPerId(this.id).subscribe(doctors => {
      this.disponibles = false;
      if(doctors.length == 0){
        this.disponibles = true;
        return null;
      }
      /* console.log(doctors); */
      this.doctors = doctors;
      for(let doctor of doctors){
        this.citasSrv.getAvailablesPerDoctor(doctor.id, doctor.service.id, this.fromDate, this.toDate).subscribe((availables:any) => {
          if (availables && availables.length > 0) {
            doctor.availables = availables;
            doctor.hasAvailable = true;
            doctor.expanded = false;
          }
        })
      }
      this.doctorsF = this.doctors;
      console.log('this.doctors:', this.doctors);
    });
    /* loading.dismiss(); */
  }

  expandedItem(doctor, available) {
    if(!this.hora){
      /* let loading = this.loadingCtrl.create({
        content: 'Cargando horas disponibles...',
        spinner: 'bubbles',
      });
      loading.present(); */
      console.log('doctor:', doctor, available);
      this.selectedDay = available;
      let id = doctor.id;
      let serviceId = doctor.service.id;
      let fromDate = this.selectedDay.date;
      let toDate = this.selectedDay.date;
      this.citasSrv.getAvailablesPerDoctor(id, serviceId , fromDate, toDate).subscribe(hoy => {
  
        console.log('hoy' , hoy);
        this.dias = hoy[0].hours;
        // console.log('this.dias:',this.dias);
        this.doctors.map((listDoctor) => {
          if (doctor == listDoctor) {
            listDoctor.expanded = true;
          } else {
            listDoctor.expanded = false;
          }
          return listDoctor
        });
        this.horas = this.dias;
        /* this.turnoManana = this.horas.filter(x =>x.hour < '15:20:00');
        this.turnoTarde = this.horas.filter(x => x.hour > '15:00:00'); */

        /* loading.dismiss(); */
        console.log('las horas:', this.horas);
        this.dia = available.date;
        // console.log('dias', this.dias);
      })
    }else{
      console.log('doctor:', doctor, available);
      this.selectedDay = available;
      let id = doctor.id;
      let serviceId = doctor.service.id;
      let fromDate = this.selectedDay.date;
      let toDate = this.selectedDay.date;
      this.citasSrv.getAvailablesPerDoctor(id, serviceId , fromDate, toDate).subscribe(hoy => {
  
        console.log('hoy' , hoy);
        this.dias = hoy[0].hours;
        // console.log('this.dias:',this.dias);
        this.doctors.map((listDoctor) => {
          if (doctor == listDoctor) {
            listDoctor.expanded = true;
          } else {
            listDoctor.expanded = false;
          }
          return listDoctor
        });
        this.horas = this.dias;
        // console.log('las horas:', this.horas);
        this.dia = available.date;
        // console.log('dias', this.dias);
      })
    }
  }

  /* goToResumen(doctor , hora){
    console.log('available de cita:',hora);
    this.navCtrl.push(ResumenPage, {available:this.selectedDay, doctor: doctor , hora:hora});
    this.navCtrl.push (FinancerPage, {available:this.selectedDay , doctor: doctor, hora: hora});
  } */
  
  goToFinancer(doctor, hora){
    console.log('hora y doctor', hora, doctor);
    const datos = {
      centerId : hora.params.centerId,
      servicio_id: hora.params.serviceId,
      prestacion: hora.params.provisionId,
      medico_id: doctor.id,
      proposedate: this.selectedDay.date
    }
    const datosObj = JSON.stringify(datos);
    console.log('data armada', datosObj);
      this.routes.navigate(['financer', datosObj]);
  

 /*  setFinancer(){
    let available = this.available;
    let hora: hora;
    let doctor: DocumentOrShadowRoot;
    this.finanSrv.guardardatos(available, doctor, hora){
*/
    } 

  }
  