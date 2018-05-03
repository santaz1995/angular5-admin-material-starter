import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from 'app/projects/skills/skills.component';
import { SkillStoreComponent } from 'app/projects/skills/skill-store/skill-store.component';
import { SkillUpdateComponent } from 'app/projects/skills/skill-update/skill-update.component';
import { SkillsResolver } from 'app/common/resolvers/project/skill/skills.resolver';
import { SkillByIdResolver } from 'app/common/resolvers/project/skill/skill-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    resolve: {
      skills: SkillsResolver,
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
      skill: SkillByIdResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRouting {}
