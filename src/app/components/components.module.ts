import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPregnancyComponent } from './fecha-pregnancy/fecha-pregnancy.component';


@NgModule({
  declarations: [FechaPregnancyComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FechaPregnancyComponent
  ]
})
export class ComponentsModule { }
