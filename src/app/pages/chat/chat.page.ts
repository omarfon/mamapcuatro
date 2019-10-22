import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { IonContent, AlertController } from '@ionic/angular';
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
  @ViewChild(IonContent, {static: false}) content: IonContent;

  constructor(public chatSrv: ChatService, 
              public alert: AlertController,
              public router: Router) {

                /* this.mensajePendiente(); */
              }

  async ngOnInit() {
    if(localStorage.getItem('token') && localStorage.getItem('uid')){
      this.chatSrv.registerDb();
      this.obtenerConversacion(); 
    }else{
      this.obtenerConversacion();
    }
    
  }
  
 /*  async mensajePendiente(){
    const alert = await this.alert.create({
      header: 'Estamos trabajando en esta funcionalidad',
      subHeader:" La tendremos disponible en unos dias...",
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
