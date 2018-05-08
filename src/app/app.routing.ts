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
        path: 'projects/skills',
        loadChildren: 'app/projects/skills/skills.module#SkillsModule',
      },
      {
        path: 'projects/categories',
        loadChildren: 'app/projects/categories/categories.module#CategoriesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }

