import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectEntity } from 'app/common/entities/project.entity';
import { ApiProjectService } from 'app/common/service/data/api-project.service';

@Injectable()
export class ProjectByIdResolver implements Resolve<ProjectEntity> {

  constructor(private projectService: ApiProjectService) {}

  /**
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<ProjectEntity>}
   */
  public resolve(route: ActivatedRouteSnapshot) {
    return this.projectService.getById(route.params['id']);
  }
}
