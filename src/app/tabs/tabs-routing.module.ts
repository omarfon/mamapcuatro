import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children:
        [
          {
            path: 'tab1',
            children:
              [
                {
                  path: '',
                  loadChildren: '../pages/home/home.module#HomePageModule'
                }
              ]
          },
          {
            path: 'tab2',
            children:
              [
                {
                  path: '',
                  loadChildren: '../pages/evolucion/evolucion.module#EvolucionPageModule'
                }
              ]
          },
          {
            path: 'tab3',
            children:
              [
                {
                  path: '',
                  loadChildren: '../pages/controles/controles.module#ControlesPageModule'
                }
              ]
          },
          {
            path: '',
            redirectTo: '/tabs/tab1',
            pathMatch: 'full'
          }
        ]
    },
    {
      path: '',
      redirectTo: '/tabs/tab1',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports:
      [
        RouterModule.forChild(routes)
      ],
    exports:
      [
        RouterModule
      ]
  })
  export class TabsPageRoutingModule {}