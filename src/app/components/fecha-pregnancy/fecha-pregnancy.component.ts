import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-fecha-pregnancy',
  templateUrl: './fecha-pregnancy.component.html',
  styleUrls: ['./fecha-pregnancy.component.scss'],
})
export class FechaPregnancyComponent implements OnInit {


  constructor(public router: Router, public popoverCtrl: PopoverController) { }

  ngOnInit() {}

  saveDate(fechaManual){
    
    localStorage.setItem('startPregnancy', fechaManual.value);
    this.popoverCtrl.dismiss()
    this.router.navigate(['tabs']);
    
    console.log( fechaManual, fechaManual.value);
  }

}
