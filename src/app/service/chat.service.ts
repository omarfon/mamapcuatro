import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase';

interface Message {
  content:string
  type: string
  date: Date
  user: string
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public resAuth;
  public uidEnBase ;
  uid: string;
  id: string;
  email: string;

  constructor(public db: AngularFirestore,
    public ad: AngularFireAuth) { }

    getChatRoom(uid){
      console.log(uid);
       return this.db.collection('chatsRooms').doc(uid).valueChanges()
     }
   
   sendMessageToFirebase(message: Message, chat: string){
     console.log(message, chat);
     this.db.collection('chatsRooms').doc(chat).update({
       messages: firestore.FieldValue.arrayUnion(message),
     })
   }


   registerForCustom(){
     let registrar = localStorage.getItem('uid')
     if(registrar){
       console.log('ya no registrara');
     }else{
       let token = localStorage.getItem('token')
        return new Promise((resolve, reject)=>{
           this.ad.auth.signInWithCustomToken(token).then(res =>{
             console.log(res);
             localStorage.setItem('uid', res.user.uid )
             if(localStorage.getItem('uid')){
               this.uid = localStorage.getItem('uid');
               this.uidEnBase = this.db.collection('chatsRooms').doc(this.uid);
               if( this.uidEnBase == this.uid){
                 this.id = localStorage.getItem('id');
                 this.email = localStorage.getItem('email');
                 this.db.collection('chatsRooms').doc(this.uid).set({
                   id:this.uid,
                   name: localStorage.getItem('patientName'),
                   uid: this.uid,
                   role: "user",
                   datos:
                   {
                     patientid:this.id,
                     email:this.email,
                    }
                    
                  }).then(result =>{
                    console.log('resultado de la escritura:', res);
                  }).catch(err =>{
                    console.log(err, 'error de no escritura');
                  })
                }
              }else{
                const uid = localStorage.getItem('uid');
                return this.db.collection('chatsRooms').doc(uid).valueChanges()
             }
          }).catch(err => reject(err))
        });
     }
   }
   

   
    /*  registerUser(email, password){
       return new Promise((resolve, reject)=>{
         this.ad.auth.createUserWithEmailAndPassword(email , password).then(resolve =>{
           const uid = resolve.user.uid;
           this.db.collection('chatsRooms').doc(uid).set({
             id:uid,
             name: localStorage.getItem('patientName'),
             uid: uid
           }).then(result =>{
             console.log('resultado de la escritura:', result);
           }).catch(err =>{
             console.log(err, 'error de no escritura');
           })
       }).catch(err => reject(err));
     });
     } */
   
     loginEmailUser(email, password){
         return new Promise((resolve, reject)=>{
           this.ad.auth.signInWithEmailAndPassword(email, password)
           .then(userData => resolve(userData)),
           err => (reject(err));
         });
     }
     registerChatRoom(){
       /* this.db.collection('chatsRooms').add() */
     }
}
