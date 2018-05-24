import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from 'app/material.module';
import { MomentModule } from 'angular2-moment';
import { ApiProjectService } from 'app/common/service/data/api-project.service';
import { ProjectsResolver } from 'app/common/resolvers/project/projects.resolver';
import { ProjectsComponent } from 'app/projects/projects.component';
import { ProjectsRouting } from 'app/projects/projects.routing';
import { ProjectStoreComponent } from 'app/projects/project-store/project-store.component';
import { CategoriesResolver } from 'app/common/resolvers/project/category/categories.resolver';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';
import { ProjectUpdateComponent } from 'app/projects/project-update/project-update.component';
import { ProjectByIdResolver } from 'app/common/resolvers/project/project-by-id.resolver';
import { ProjectImagesResolver } from 'app/common/resolvers/project/project-images.resolver';
import { ProjectImagesComponent } from 'app/projects/project-images/project-images.component';
import { ApiProjectImageService } from 'app/common/service/data/api-project-image.service';
import { ProjectImageStoreComponent } from 'app/projects/project-images/project-image-store/project-image-store.component';
import { AppDropzoneModule } from 'app/common/components/dropzone/dropzone.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MomentModule,
    MaterialModule,
    ProjectsRouting,
    AppDropzoneModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectStoreComponent,
    ProjectUpdateComponent,
    ProjectImagesComponent,
    ProjectImageStoreComponent
  ],
  providers: [
    ApiProjectService,
    ApiProjectCategoryService,
    ApiProjectImageService,
    ProjectsResolver,
    ProjectByIdResolver,
    CategoriesResolver,
    ProjectImagesResolver
  ],
})
export class ProjectsModule { }
