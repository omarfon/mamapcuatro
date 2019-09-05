import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { IonContent } from '@ionic/angular';

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

  constructor(public chatSrv: ChatService) {}

  ngOnInit() {
    if(localStorage.getItem('token') && !localStorage.getItem('uid')){
      this.chatSrv.registerForCustom();
    }else{
      this.obtenerConversacion();
    }
  }

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
      user: 'Juana',
    }
    const id = localStorage.getItem('uid');
    this.chatSrv.sendMessageToFirebase(mensaje, id );
    this.msg = "";

    setTimeout(()=>{
      this.content.scrollToBottom(300);
    },500)
  }

}
