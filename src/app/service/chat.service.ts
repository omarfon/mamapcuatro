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

  constructor(public db: AngularFirestore,
    public ad: AngularFireAuth) { }

    getChatRoom(uid){
      console.log(uid);
       return this.db.collection('chatsRooms').doc(uid).valueChanges()
     }
   
   sendMessageToFirebase(message: Message, chat: string){
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
          this.ad.auth.signInWithCustomToken(token).then(resolve =>{
             console.log(resolve);
             let data = resolve;
             localStorage.setItem('uid', data.user.uid);
             if(localStorage.getItem('uid')){
               const uid = localStorage.getItem('uid');
               const id = localStorage.getItem('id');
               const email = localStorage.getItem('email');
               this.db.collection('chatsRooms').doc(uid).set({
                 id:uid,
                 name: localStorage.getItem('patientName'),
                 uid: uid,
                 role: "user",
                 datos:
                   {
                     patientid:id,
                     email:email,
                   }
                 
               }).then(result =>{
                 console.log('resultado de la escritura:', result);
               }).catch(err =>{
                 console.log(err, 'error de no escritura');
               })
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
