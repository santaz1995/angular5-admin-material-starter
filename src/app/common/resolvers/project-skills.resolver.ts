import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';

@Injectable()
export class ProjectSkillsResolver implements Resolve<ProjectSkillEntity[]> {

  constructor(private projectSkillService: ApiProjectSkillService) {}

  /**
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<ProjectSkillEntity[]>}
   */
  public resolve(route: ActivatedRouteSnapshot) {
    return this.projectSkillService.getAll();
  }
}
