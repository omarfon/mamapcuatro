import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataFinancerService } from './resolver/data-financer.service';


const routes: Routes = [
  /* { path: '', redirectTo: 'login', pathMatch: 'full' }, */
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  /* { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)}, */
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'evolucion', loadChildren: './pages/evolucion/evolucion.module#EvolucionPageModule' },
  { path: 'controles/:c', loadChildren: './pages/controles/controles.module#ControlesPageModule' },
  { path: 'citas-pendientes', loadChildren: './pages/citas-pendientes/citas-pendientes.module#CitasPendientesPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'detail-week', loadChildren: './pages/detail-week/detail-week.module#DetailWeekPageModule' },
  { path: 'citas', loadChildren: './pages/citas/citas.module#CitasPageModule' },
  { path: 'financer', loadChildren: './pages/financer/financer.module#FinancerPageModule' },
  { path: 'financer/:datosObj', loadChildren: './pages/financer/financer.module#FinancerPageModule' },
  { path: 'detailcontrol', loadChildren: './pages/detailcontrol/detailcontrol.module#DetailcontrolPageModule' },
  { path: 'recoverycode', loadChildren: './pages/recoverycode/recoverycode.module#RecoverycodePageModule' },
  { path: 'recetas', loadChildren: './pages/recetas/recetas.module#RecetasPageModule' },
  { path: 'detailpage', loadChildren: './pages/detailpage/detailpage.module#DetailpagePageModule' },
  { path: 'graficas', loadChildren: './pages/graficas/graficas.module#GraficasPageModule' },
  { path: 'resumen', loadChildren: './pages/resumen/resumen.module#ResumenPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
