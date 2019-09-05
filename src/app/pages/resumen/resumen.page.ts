import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TabsPage } from '../../tabs/tabs.page';
import { AppointmentService } from '../../service/appointment.service';
declare var Culqi: any;


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  currentAppointment: any;
  price: number;
  public doctor;
  public available;
  public hora;
  public subida;
  public pago;
  public date: string;
  public conPlanEfectivo = false;
  private culqiData;


  constructor(public loadCtrl:LoadingController,
              public router: Router,
              public appointmentProvider: AppointmentService) {

                this.culqiData = JSON.parse(localStorage.getItem('culqiData'));
                Culqi.publicKey = 'pk_test_e85SD7RVrWlW0u7z';
               }

  ngOnInit() {
  }
  
  async openCulqi() {
    let loadingPago = await this.loadCtrl.create({
      message: "Haciendo el cobro...",
    });
    await loadingPago.present();
    let appointment = this.currentAppointment;
    // console.log(Culqi);
    // console.log('elprecio:',this.price)
    // console.log("this.openCulqi");
    const settings = {
      title: 'Pago Online',
      description: "prueba",
      currency: "PEN",
      amount: this.price * 100
    };
    this.culqiData.amount = this.price * 100;
    localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
    console.log('settings:', settings, this.culqiData);
    Culqi.settings(settings);


    const i = setInterval(function () {
      // si se puede realizar el pago con culqi
      this.culqiData = JSON.parse(localStorage.getItem('culqiData'));
      // console.log('this.culqiData:', this.culqiData);
      if (this.culqiData.status == "ok") {
        this.culqiData.status = "";
        localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
        clearInterval(i);
        loadingPago.dismiss();
        let alert = this.alertCtrl.create({
          title: "Creación de cita",
          subTitle: "la cita que reservaste ha sido creada satisfactoriamente.",
          buttons: [
            {
              text: "OK",
              role: 'cancel'
            }
          ]
        });
        alert.present();
        /* this.navCtrl.setRoot(TabsPage); */
        this.router.navigate(['TabsPage']);
      }
      // si no se puede realizar el pago con culqi
      else if (this.culqiData.status == "error") {
        this.culqiData.status = "";
        localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
        const self = this;
        clearInterval(i);
        loadingPago.dismiss();
        let action = this.actionSheet.create({
          title: "EL PAGO NO PUDO REALIZARSE",
          buttons: [
            {
              text: "Intentar de nuevo",
              role: 'destructive',
              handler: () => {
                action.dismiss().then(() => {
                  this.culqiData.status = "";
                  localStorage.setItem('culqiData', JSON.stringify(this.culqiData));
                  self.openCulqi();
                });
                return false;
              }
            },
            {
              text: "Pagar en clínica",
              handler: () => {
                this.navCtrl.setRoot(TabsPage);
                let alert = this.alertCtrl.create({
                  title: "La Cita que pediste ha sido creada",
                  subTitle: "recuerda que tendras que pagar en la clínica",
                  buttons: [{
                    text: "OK",
                    role: 'cancel'
                  }]
                });
                alert.present();
              }
            },
            {
              text: "Cancelar cita",
              handler: () => {
                this.appointmentProvider.destroyAppointment(appointment).subscribe(data => {
                  this.navCtrl.setRoot(TabsPage);
                  let alert = this.alertCtrl.create({
                    title: "su cita fue cancelada",
                    buttons: [
                      {
                        text: "OK",
                        role: "cancel"
                      }
                    ]
                  });
                  alert.present();
                });
              }
            }
          ]
        });
        action.present();
      }
    }.bind(this),
      1000);
    console.log("open CUlqi");
    Culqi.open();
    loadingPago.dismiss();
  }


  payCulqi() {
      this.appointmentProvider.createAppointment(this.subida, provisionId)
        .subscribe((data: any) => {
          this.currentAppointment = data;
          this.openCulqi();
        }
          , err => {
            if (this.currentAppointment !== null) {
              this.openCulqi();
              return;
            }
            console.log('err', err);
            if (!err) {
              return
            }
            const code = err.error.data.errorCode;
            let alert;
            switch (code) {
              case 15006:
                // case 15035:
                alert = this.alertCtrl.create({
                  title: 'Aviso al Cliente',
                  subTitle: 'Ya tienes una cita en una hora cercana a esta.',
                  buttons: [
                    {
                      text: 'Buscar otra hora',
                      handler: data => {
                        this.navCtrl.setRoot(TabsPage);
                      }
                    }
                  ]
                });
                alert.present();
                break;

              case 15009:
              case 15035:
                alert = this.alertCtrl.create({
                  title: 'Aviso al Cliente',
                  subTitle: 'El horario escogido ya fue tomado .',
                  buttons: [
                    {
                      text: 'Buscar otra hora',
                      handler: data => {
                        this.navCtrl.setRoot(TabsPage);
                      }
                    }
                  ],
                  enableBackdropDismiss: true
                });
                alert.present();
                break;

              default:
                break;
            }
          });
    }

  gotosave(){
    this.appointmentProvider.createAppointment(this.subida).subscribe((data: any) => {
      // console.log('data de masterDetail:', data);
      let loading = this.loadCtrl.create({
        content: 'Creando cita...'
      });
      loading.present();
      this.navCtrl.setRoot(TabsPage);
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Cita creada',
        subTitle: 'Su cita se ha creado satisfactoriamente',
        buttons: [
          {
            text: 'Ok',
            handler: data => {
            }
          }
        ]
      });
      alert.present();
    },
      err => {
        console.log('error de masterDetail:', err);
        const code = err.error.data.errorCode;
        let alert;
        switch (code) {
          case 15006:
            // case 15035:
            alert = this.alertCtrl.create({
              title: 'Aviso al Cliente',
              subTitle: 'Ya tienes una cita en una hora cercana a esta.',
              buttons: [
                {
                  text: 'Buscar otra hora',
                  handler: data => {
                    this.navCtrl.setRoot(ControlesPage);
                  }
                }
              ]
            });
            alert.present();
            break;

          case 15009:
            alert = this.alertCtrl.create({
              title: 'Aviso al Cliente',
              subTitle: 'El horario escogido ya fue tomado .',
              buttons: [
                {
                  text: 'Buscar otra hora',
                  handler: data => {
                    this.navCtrl.setRoot(ControlesPage);
                  }
                }
              ]
            });
            alert.present();
            break;

          default:
            break;
        }
      }
    );
  }

  goBack(){
    /* this.navCtrl.pop(); */
  }  

}
