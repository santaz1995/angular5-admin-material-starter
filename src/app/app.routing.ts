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
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      },
      {
        path: 'projects',
        loadChildren: 'app/projects/projects.module#ProjectsModule',
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }

