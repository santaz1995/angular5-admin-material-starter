import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from 'app/material.module';
import { MomentModule } from 'angular2-moment';
import { CategoriesResolver } from 'app/common/resolvers/project/category/categories.resolver';
import { CategoryByIdResolver } from 'app/common/resolvers/project/category/category-by-id.resolver';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';
import { CategoriesComponent } from 'app/projects/categories/categories.component';
import { CategoriesRouting } from 'app/projects/categories/categories.routing';
import { CategoryStoreComponent } from 'app/projects/categories/category-store/category-store.component';
import { CategoryUpdateComponent } from 'app/projects/categories/category-update/category-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MomentModule,
    MaterialModule,
    CategoriesRouting
  ],
  declarations: [
    CategoriesComponent,
    CategoryStoreComponent,
    CategoryUpdateComponent
  ],
  providers: [
    ApiProjectCategoryService,
    CategoriesResolver,
    CategoryByIdResolver,
  ],
})
export class CategoriesModule { }
