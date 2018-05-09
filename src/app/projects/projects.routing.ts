import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from 'app/projects/projects.component';
import { ProjectsResolver } from 'app/common/resolvers/project/projects.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    resolve: {
      projects: ProjectsResolver,
    },
  },
  {
    path: 'skills',
    loadChildren: 'app/projects/skills/skills.module#SkillsModule',
  },
  {
    path: 'categories',
    loadChildren: 'app/projects/categories/categories.module#CategoriesModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRouting {}
