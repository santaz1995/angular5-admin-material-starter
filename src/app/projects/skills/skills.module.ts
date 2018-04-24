import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SkillsRouting } from 'app/projects/skills/skills.routing';
import { SkillsComponent } from 'app/projects/skills/skills.component';
import { MaterialModule } from 'app/material.module';
import { ProjectSkillsResolver } from 'app/common/resolvers/project-skills.resolver';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkillsRouting,
    NgxDatatableModule,
    MaterialModule,
    MomentModule,
  ],
  declarations: [
    SkillsComponent,
  ],
  providers: [
    ApiProjectSkillService,
    ProjectSkillsResolver,
  ],
})
export class SkillsModule { }
