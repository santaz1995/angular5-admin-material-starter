import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from 'app/projects/projects.component';
import { ProjectsResolver } from 'app/common/resolvers/project/projects.resolver';
import { ProjectStoreComponent } from 'app/projects/project-store/project-store.component';
import { CategoriesResolver } from 'app/common/resolvers/project/category/categories.resolver';
import { ProjectUpdateComponent } from 'app/projects/project-update/project-update.component';
import { ProjectByIdResolver } from 'app/common/resolvers/project/project-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    resolve: {
      projects: ProjectsResolver,
    },
  },
  {
    path: 'store',
    component: ProjectStoreComponent,
    resolve: {
      categories: CategoriesResolver,
    },
  },
  {
    path: ':id/update',
    component: ProjectUpdateComponent,
    resolve: {
      project: ProjectByIdResolver,
      categories: CategoriesResolver,
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
