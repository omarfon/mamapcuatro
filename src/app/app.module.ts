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
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { FCM } from '@ionic-native/fcm/ngx';

registerLocaleData(localeEs);


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
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireMessagingModule,
            ComponentsModule,
            /* ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), */
            ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production })
            ],
  providers: [
    StatusBar,
    FCM,
    SplashScreen,
    {provide: LOCALE_ID, useValue: "es"},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
