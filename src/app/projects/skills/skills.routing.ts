import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from 'app/projects/skills/skills.component';
import { ProjectSkillsResolver } from 'app/common/resolvers/project-skills.resolver';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    resolve: {
      projectSkills: ProjectSkillsResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRouting {}
