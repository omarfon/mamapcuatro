import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CitasPage } from './citas.page';
import { MaterialModule } from '../../material.module';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

const routes: Routes = [
  {
    path: '',
    component: CitasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [CitasPage, ExpandableComponent]
})
export class CitasPageModule {}
