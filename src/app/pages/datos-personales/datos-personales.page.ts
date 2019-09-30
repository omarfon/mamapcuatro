import { Component, OnInit } from '@angular/core';
import { AlertController, Events } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  public fotoId = localStorage.getItem('photoUrl');
  private url = "http://dappapache02.eastus.cloudapp.azure.com:4200";
  public foto;
  image: string = null;
  public formCode: FormGroup;
  email

  public password_type: string = 'text';
  public passwordold_type: string = 'text';

  public datosPaciente;
  public correoElectronico;
  public nacimiento;

  timemark = new Date().getTime();

  constructor(public alertCtrl: AlertController,
              public form: FormBuilder,
              public userPvr: UserService,
              public router: Router,
              public camera: Camera,
              public file: File,
              public transfer: FileTransfer,
              public events: Events
            ) { }

  ngOnInit() {

    this.foto = this.url + `${this.fotoId}`;
    // console.log(this.foto);

    this.formCode = this.form.group({
      oldPassword    : ['', Validators.required],
      passwordnew       : ['',
                              [Validators.required,
                              Validators.minLength(8),
                              Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}")]],
      passwordRepeat : ['',
                             [Validators.required,
                             Validators.minLength(8),
                             Validators.pattern("(?=.*[A-Za-z])(?=.*[0-9@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}")]]
  });

   // carga de la foto de perfil
   this.foto = this.url + `${this.fotoId}`;
   // console.log(this.foto);
   // carga de los datos del usuario, aqui se le manda el id del usuario para obtener los datos con usrPvr-> getDatosPaciente
   const id = localStorage.getItem('id');
   this.userPvr.getDatosPaciente().subscribe(data =>{
     this.datosPaciente = data;
    //  console.log('this.datosPaciente:', this.datosPaciente);
   });
 this.correoElectronico = localStorage.getItem('email');
  }

  validacion(){
    const valid = this.formCode.value;
    if(valid.passwordnew  == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  async takePicture(){
    const alert = await this.alertCtrl.create({
      header:'Tu foto de Perfil',
      message:'puedes cambiar la imagen para tu perfil',
      buttons: [
        {
          text:'tomar foto',
          handler: data =>{
            this.getPicture();
          }
        },
        {
          text:'cargar Imagen',
          handler: data =>{
            this.getPictureOfDevice();
          }
        }
      ]
    });
    await alert.present();
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800,
      targetHeight: 600,
      quality: 100,
      allowEdit: true,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = imageData;

      // this.image = this.image;
      // console.log('this.image:', this.image);

      const fileTransfer: FileTransferObject = this.transfer.create();
      const authorization = localStorage.getItem('authorization');
    // let headers = new HttpHeaders({"Authorization": authorization});
      const photo = this.image;
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'photo',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {authorization}
      }
      fileTransfer.upload(photo, 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/upload-photo', options).then(data =>{
        this.foto = `http://dappapache02.eastus.cloudapp.azure.com:4200/${this.fotoId}`;
      })
      this.foto = photo;
      this.events.publish('change:foto');
      // console.log('this.foto:', this.foto);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getPictureOfDevice(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800,
      targetHeight: 600,
      quality: 100,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture( options )
    .then((imageData:any) => {

      this.image = imageData;
      // this.image = this.image;
      // console.log('this.image:', this.image);

      const fileTransfer: FileTransferObject = this.transfer.create();
      const authorization = localStorage.getItem('authorization');
    // let headers = new HttpHeaders({"Authorization": authorization});
      const photo = this.image;
      this.events.publish('change:foto');
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'photo',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {authorization}
      }
      fileTransfer.upload(photo, 'http://dappapache02.eastus.cloudapp.azure.com:4200/api/v2/users/upload-photo', options).then(data =>{
        this.foto = `http://dappapache02.eastus.cloudapp.azure.com:4200/${this.fotoId}`;
      })
      this.foto = photo;
      // console.log('this.foto:', this.foto);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  changePassword(){
    let password = this.formCode.value.oldPassword;
    let passwordNew = this.formCode.value.passwordRepeat;

this.userPvr.changePassword(password , passwordNew ).subscribe(async (data:any) =>{
        if(data.result == 'ok'){
            const alert = await this.alertCtrl.create({
                header : "Cambio de Contraseña",
                subHeader: `${data.message}`,
                buttons: [{
                  text: 'Ok',
                  handler: ()=>{
                    localStorage.removeItem('idTokenUser');
                    localStorage.removeItem('emailUser');
                    localStorage.removeItem('passUser');
                    localStorage.removeItem('authorization');
                    localStorage.removeItem('role');
                    localStorage.removeItem('patientName');
                    localStorage.removeItem('image');
                   /*  this.navCtrl.push(LoginPage); */
                   this.router.navigate(['login'])
                  }
                }]
            });
            await alert.present();
        }else{
          const alert = await this.alertCtrl.create({
            header : `${data.error.message}`,
            subHeader: `${data.error.help}`,
            buttons: ['Volver a intentar']
        });
        await alert.present();
        }
});
}

changeType(){
  this.password_type = this.password_type === 'password' ? 'text' : 'password';
}

changeOldType(){
  this.passwordold_type = this.passwordold_type === 'password' ? 'text' : 'password';
}

}
