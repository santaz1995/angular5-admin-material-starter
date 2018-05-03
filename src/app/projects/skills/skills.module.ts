import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SkillsRouting } from 'app/projects/skills/skills.routing';
import { SkillsComponent } from 'app/projects/skills/skills.component';
import { MaterialModule } from 'app/material.module';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';
import { MomentModule } from 'angular2-moment';
import { SkillStoreComponent } from 'app/projects/skills/skill-store/skill-store.component';
import { SkillUpdateComponent } from 'app/projects/skills/skill-update/skill-update.component';
import { SkillsResolver } from 'app/common/resolvers/project/skill/skills.resolver';
import { SkillByIdResolver } from 'app/common/resolvers/project/skill/skill-by-id.resolver';

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
    SkillStoreComponent,
    SkillUpdateComponent
  ],
  providers: [
    ApiProjectSkillService,
    SkillsResolver,
    SkillByIdResolver,
  ],
})
export class SkillsModule { }
