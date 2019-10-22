import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { IonContent, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


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
  @ViewChild(IonContent, {static: false}) content: IonContent;

  constructor(public chatSrv: ChatService, 
              public alert: AlertController,
              public router: Router,
              public toast: ToastController) {
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
  }
  
  async makeToast(message){
    const toast = await this.toast.create({
      message,
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });
    toast.present();
  }

  getPermision(){
    return this.afm.requestToken.pipe(
      tap(token=>(this.token = token))
    );
  }

  /* getPermission(){
    this.fcm.getPermision().subscribe();
  } */
  
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
    /* this.fcm.getToken().then(data => {
          console.log(data)
          const token = data;
          if(token){
            this.chat.registerToken(token);
          }
        }); */
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
