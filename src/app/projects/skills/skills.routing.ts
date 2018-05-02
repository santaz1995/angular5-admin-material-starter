import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from 'app/projects/skills/skills.component';
import { ProjectSkillsResolver } from 'app/common/resolvers/project-skill/project-skills.resolver';
import { SkillStoreComponent } from 'app/projects/skills/skill-store/skill-store.component';
import { ProjectSkillByIdResolver } from 'app/common/resolvers/project-skill/project-skill-by-id.resolver';
import { SkillUpdateComponent } from 'app/projects/skills/skill-update/skill-update.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    resolve: {
      projectSkills: ProjectSkillsResolver,
    },
  },
  {
    path: 'store',
    component: SkillStoreComponent,
  },
  {
    path: ':id',
    component: SkillUpdateComponent,
    resolve: {
      projectSkill: ProjectSkillByIdResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRouting {}
