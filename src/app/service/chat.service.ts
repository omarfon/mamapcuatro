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
   
     registerUser(email, password){
       return new Promise((resolve, reject)=>{
         this.ad.auth.createUserWithEmailAndPassword(email , password).then(res =>{
           const uid = res.user.uid;
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
     }
   
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
