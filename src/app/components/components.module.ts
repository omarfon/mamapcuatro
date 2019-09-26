import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPregnancyComponent } from './fecha-pregnancy/fecha-pregnancy.component';
import { ModalCodeComponent } from './modal-code/modal-code.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FechaPregnancyComponent, 
                 ModalCodeComponent,
                 ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    FechaPregnancyComponent,
    ModalCodeComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
