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
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }

