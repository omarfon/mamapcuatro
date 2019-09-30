import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPregnancyComponent } from './fecha-pregnancy/fecha-pregnancy.component';
import { ModalCodeComponent } from './modal-code/modal-code.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FiterComponent } from './fiter/fiter.component';

@NgModule({
  declarations: [FechaPregnancyComponent, 
                 ModalCodeComponent,
                FiterComponent

                 ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    FechaPregnancyComponent,
    ModalCodeComponent,
    FiterComponent

  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
