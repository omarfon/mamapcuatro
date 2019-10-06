import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinancerPage } from './financer.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfonopagoComponent } from 'src/app/components/infonopago/infonopago.component';


const routes: Routes = [
  {
    path: '',
    component: FinancerPage
  }
];

@NgModule({
  entryComponents:[
    InfonopagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [FinancerPage]
})
export class FinancerPageModule {}
