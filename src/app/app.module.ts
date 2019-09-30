import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
/* import { firebaseConfig } from '../environments/environment'; */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ComponentsModule } from './components/components.module';


registerLocaleData(localeEs);



const firebaseConfig = {
  apiKey: "AIzaSyBMopx6KZ79wFANi2Yb6ysxvAIdRso96VY",
    authDomain: "aviva-mamapp-dev.firebaseapp.com",
    databaseURL: "https://aviva-mamapp-dev.firebaseio.com",
    projectId: "aviva-mamapp-dev",
    storageBucket: "",
    messagingSenderId: "519988913097",
    appId: "1:519988913097:web:dca29f129d59cc0b"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            FormsModule,
            ReactiveFormsModule,
            IonicModule.forRoot(), 
            AppRoutingModule, 
            HttpClientModule, 
            BrowserAnimationsModule, 
            MaterialModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            AngularFirestoreModule,
            ComponentsModule,
            ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
            ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: "es"},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
