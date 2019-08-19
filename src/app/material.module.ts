import { NgModule } from '@angular/core';
/* import { MatMomentDateModule } from '@angular/material-moment-adapter'; */
/* import {MatExpansionModule} from '@angular/material/expansion'; */
import { MatButtonModule,
  MatTabsModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSelectModule,
  MatSidenavModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MAT_DATE_LOCALE,
  MatExpansionModule
  } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule ,
    MatNativeDateModule,
    MatFormFieldModule,
   MatToolbarModule,
   MatSelectModule,
   MatSidenavModule,
   MatRadioModule,
   MatCardModule,
   MatButtonModule,
   MatExpansionModule,
   MatTableModule
],
  exports: [MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule]
})
export class MaterialModule { }
