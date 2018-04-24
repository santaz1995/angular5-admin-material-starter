import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './common/components/layouts/full/full.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }

