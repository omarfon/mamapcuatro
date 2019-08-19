import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotasService } from '../../service/notas.service';
import * as moment from 'moment';
import { DatosControlService } from '../../service/datos-control.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /* private number = Constants.COACH; */
  public cantidad: 0;
  public _cantidad: any;
  public startPregnancy;
  public start;
  public fecha;
  public semanas;
  public totalSemanas;
  public totalDias;
  public total;
  public totaldias;
  mostrar = false;
  today;
  params;
  public notas;
  public _notas;
  public filtro;
  public notasMuestreo;
  public notasFiltro;
  public dia;
  public nombre;
  public fechaPosible;
  public posible;
  public diasPendientes;
  public diasFaltantes;

  constructor( public router : Router,
              public notasServ: NotasService,
              public datosPvr: DatosControlService) { }

  ngOnInit() {

    let cargaPublic = localStorage.getItem('role');
    if (cargaPublic == "user") {
      this.datosPvr.getStartPregnacy().subscribe(data => {
        this.params = data;
        console.log('parametros:', this.params);
        // localStorage.setItem('fechaApertura', this.params.fecha_apertura);
        // let fechaApertura = localStorage.getItem('fechaApertura');
        this.fecha = moment(localStorage.getItem('startPregnancy')).clone();
        this.today = moment();
        // aqui calcula la cantidad de semanas transcurridas
        const totalDays = this.today.diff(this.fecha, 'days');
        this.total = this.today.diff(this.fecha, 'weeks');
        /* aqui calculo el dia pendiente */
        this.diasPendientes =  totalDays - (this.total * 7 )  ;
        this.totaldias = this.total.toString();

        /* cuanto tiempo ha pasado desde la concepcion */
        const start = moment(this.fecha);
        const cuanto = start.fromNow(true);
        console.log('cuanto', cuanto);

        /*   aqui les sumamos las 40 semanas a la fecha inicial para poder tener el ultimo dia de parto */
        const posible = start.add(40, 'w');
        this.posible = posible;
        const posibleDays = posible.diff(this.today, 'd');
        console.log('posibleDays:', posibleDays);
        this.fechaPosible = posible.diff(this.today, 'w');
        const diasFaltantes =  posibleDays - (this.fechaPosible * 7) ;
        this.diasFaltantes = diasFaltantes;
        console.log('diasFaltantes:', diasFaltantes);
       
       this.cantidad = this.total; 


        this.mostrar = true;
        if (!this.notasFiltro) {
          this.notasServ.getNotes().subscribe(data => {
            this.notas = data;
            console.log('todas las notas:', this.notas);
          });
        } else {
          let elfilter = this.notasFiltro;
          this.notasServ.getNotesFilter(elfilter).subscribe(data => {
            console.log('lo que me llega del filtro:', data);
            this.notas = data
            // console.log(this.notas);
          });
          this.notasFiltro = this.notas;
        }
      });
    } else {
      console.log("no intenta obtener info de la semana ");
    }
  }


  goToChat(){
    this.router.navigateByUrl('/evolucion');
  }
  goToEvolution(){
    console.log('me llevara a evolución');
  }
  
  doRefresh(refresher) {
    this.notasServ.getNotes().subscribe(data => {
      this.notas = data;
      refresher.complete();
    });
  }

  openFilters(){
    console.log('abrir filtros');
  }

}
