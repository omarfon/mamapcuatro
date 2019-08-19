import { FinancerService } from './../../service/financer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../service/appointment.service';
import { AlertController, LoadingController} from '@ionic/angular';
import { DataFinancerService } from '../../resolver/data-financer.service';



@Component({
  selector: 'app-financer',
  templateUrl: './financer.page.html',
  styleUrls: ['./financer.page.scss'],
})
export class FinancerPage implements OnInit {
  public hora;
  public doctor;
  public available;
  public proposedate;
  public plan;
  public planes;
  public desabilitado: boolean = false;
  public nomark:boolean = false;
  public price;
  public paquete: boolean = false;
  public desabilitadoPaquete: boolean = false;
  public subida;
  public datos;
  public dataArmada;

  constructor(public routes : Router,
              public route: ActivatedRoute,
              public appointmentSrv: AppointmentService,
              public financerSrv: FinancerService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public financerdatSrv: DataFinancerService) { }

  ngOnInit() {
    const data = this.route.snapshot.paramMap.get('datosObj');
    this.dataArmada = JSON.parse(data);
    console.log('dataArmada en financer:', this.dataArmada);

    this.getPlanesPacienteConPrecio();
  }


  getPlanesPacienteConPrecio(){
    let centerId = this.dataArmada.centerId;
    let servicio_id = this.dataArmada.servicio_id;
    let prestacion_id = this.dataArmada.prestacion;
    let medico_id = this.dataArmada.medico_id;
    let proposedate = this.dataArmada.proposedate

    this.financerSrv.getPlanesPaciente(centerId , servicio_id, prestacion_id , medico_id , proposedate ).subscribe(data =>{
      this.planes = data;
      console.log('this.planes:', this.planes);
    });
  }

  goToPay(){
    /* console.log('me envia a pagos'); */
    let available = this.available;
    let hora = this.hora;
    let doctor = this.doctor;
    let plan = this.plan;
    this.routes.navigate(['resumen',{
      available:available,
      hora: hora,
      doctor: doctor,
      plan:plan
    }])
    /* this.navCtrl.push(ResumenPage,  {available: available, hora: hora, doctor: doctor, plan: plan}) */
  }

  acceptFinancer(plan){
    this.desabilitado = !this.desabilitado;
    this.plan = plan;
    console.log('el plan:', plan);
    this.price =  plan.precio[0].total ;
    this.nomark = true;
    this.paquete = false;
  }

  acceptFinancerPaquete(){
    console.log('se cambia a botom pagar ahora y ya no va a resumenPage');
    this.desabilitado  = !this.desabilitado;
    this.paquete = true ;
    this.desabilitado = true;

  }

   pagePaquete(){
    console.log('aqui se va defrente a pagar paquete con todos los datos');
    let provisionId = this.hora.params.provisionId;
    let subida = this.hora.listjson;
    console.log('datos antes de pagar:', provisionId, this.subida, this.hora);
    
       this.appointmentSrv.createAppointment(subida , provisionId).subscribe((data:any) => {
        console.log('data devuelta:', data);
         /* if(data.ok == false){
          const alert = this.alertCtrl.create({
              header:'Problema de reserva',
              message:`${data.error.help}`,
              buttons: [
                {
                text: 'Buscar otro horario',
                handler: ()=>{
                  this.routes.navigate(['citas'])
                }
              },{
                text: 'cancelar',
                handler: ()=>{
                  this.routes.navigate(['home'])
                }
              }
            ]
          });
          alert.present();
        } else{
            const loading =  this.loadingCtrl.create({
              message: "creando cita"
            });
            await loading.present();
            alert = await this.alertCtrl.create({
            header: "Creación de cita",
            subHeader: "la cita que reservaste ha sido creada satisfactoriamente.",
            buttons: [
              {
                text: "Ok",
                role: "Cancel"
              }
            ]
          });
          loading.dismiss();
          alert.present();
          this.routes.navigate(['home'])
        }  */
    });  
  }

}
