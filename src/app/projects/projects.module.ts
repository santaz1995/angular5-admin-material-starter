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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MomentModule,
    MaterialModule,
    ProjectsRouting
  ],
  declarations: [
    ProjectsComponent,
  ],
  providers: [
    ApiProjectService,
    ProjectsResolver,
  ],
})
export class ProjectsModule { }
