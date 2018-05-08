import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesResolver } from 'app/common/resolvers/project/category/categories.resolver';
import { CategoriesComponent } from 'app/projects/categories/categories.component';
import { CategoryStoreComponent } from 'app/projects/categories/category-store/category-store.component';
import { CategoryUpdateComponent } from 'app/projects/categories/category-update/category-update.component';
import { CategoryByIdResolver } from 'app/common/resolvers/project/category/category-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: {
      categories: CategoriesResolver,
    },
  },
  {
    path: 'store',
    component: CategoryStoreComponent,
  },
  {
    path: ':id',
    component: CategoryUpdateComponent,
    resolve: {
      category: CategoryByIdResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRouting {}
