import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProjectEntity } from 'app/common/entities/project.entity';
import { ApiProjectService } from 'app/common/service/data/api-project.service';

@Injectable()
export class ProjectsResolver implements Resolve<ProjectEntity[]> {

  constructor(private projectService: ApiProjectService) {}

  /**
   * @returns {Observable<ProjectEntity[]>}
   */
  public resolve() {
    return this.projectService.getAll();
  }
}
