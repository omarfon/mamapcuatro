import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { IonContent, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { FCM } from '@ionic-native/fcm/ngx';
import { mergeMap } from 'rxjs/operators';


interface Message {
  content:string
  type: string
  date: Date
  user: string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public msg;
  public chat;
  public conversacion;
  public uid;
  currentUser = 'Claudia';
  public token;
  /* public messaging = firebase.messaging(); */
  @ViewChild(IonContent, {static: false}) content: IonContent;

  constructor(public chatSrv: ChatService, 
              public alert: AlertController,
              public router: Router,
              public toast: ToastController,
              public afm: AngularFireMessaging,
              public fcm: FCM) {
/* 
                this.mensajePendiente(); */
              }

  async ngOnInit() {
   if(localStorage.getItem('token') ){
      this.chatSrv.registerDb();
      this.obtenerConversacion(); 
    }else{
      this.obtenerConversacion();
    } 

    this.fcm.onNotification().subscribe(data =>{
        console.log('data e onNotification:',data);
        if(data.wasTapped){
          console.log('tapped');
        }else{
          console.log('tap');
        }
      }) 
  }

  

  async makeToast(){
    const toast = await this.toast.create({
      message: "has habilitado las notificaciones de tu coach",
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Entiendo'
    });
    toast.present();
  }

  requestPushNotificationsPermission() {
    const uid = localStorage.getItem('uid');
    this.afm.requestToken
      .subscribe(
        (token) => {
          this.makeToast();
          console.log('Permission granted! Save to the server!', token);
          this.chatSrv.registerToken(token, uid);
        },
        (error) => {
          console.error(error);
        }
      );

  }

  deleteToken() {
    this.afm.getToken
      .pipe(mergeMap(token => this.afm.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Deleted!'); },
      );
  }

  listen() {
    console.log('escuchando');
    this.afm.messages
    .subscribe((message) => { console.log('m', message); });
  }


  
  /* async mensajePendiente(){
    const alert = await this.alert.create({
      header: 'trabajando en esta funcionalidad',
      subHeader:"podrás hablar con tu coach, en unos dias, te avisaremos ni bien este listo...",
      backdropDismiss:false,
      buttons:[
        {
          text:'entiendo',
          handler:()=>{
            this.router.navigate(['tabs']);
          }
        }
      ]
    })
    await alert.present();
  } */

  obtenerConversacion(){
    console.log(this.conversacion);
    const uid = localStorage.getItem('uid');
    this.chatSrv.getChatRoom(uid).subscribe( room =>{
      this.conversacion = room;
      console.log('this.conversacion:',this.conversacion);
    })
    setTimeout(()=>{
      this.content.scrollToBottom(300);
    },300) 
 } 
  

  sendMessage(){
    const mensaje : Message ={
      content: this.msg,
      type:'text',
      date: new Date(),
      user: localStorage.getItem('name'),
    }
    const id = localStorage.getItem('uid');
    this.chatSrv.sendMessageToFirebase(mensaje, id );
    this.msg = "";

    setTimeout(()=>{
      this.content.scrollToBottom(300);
    },500)
  }

}
