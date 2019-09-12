import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public routes: Router,
    private menu: MenuController
  ) {
    this.sideMenu();
    this.initializeApp();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/tabs",
        icon  : "home"
      },
      {
        title : "Mis Citas",
        url   : "/citas-pendientes",
        icon  : "alarm"
      },
      {
        title : "Graficas",
        url   : "/graficas",
        icon  : "analytics"
      },
      {
        title : "Recetas",
        url   : "/recetas",
        icon  : "clipboard"
      }/* ,
      {
        title : "Cerrar sesión",
        url   : "/recetas",
        icon  : "recipes"
      }, */
    ]
  }

  closeSession(){
    this.menu.close('start');
    localStorage.clear();
    this.routes.navigate(['login']);
    console.log('cerrar sesión');
  }
}
