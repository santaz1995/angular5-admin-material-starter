import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProjectImageEntity } from 'app/common/entities/project-image.entity';
import { ApiProjectImageService } from 'app/common/service/data/api-project-image.service';

@Injectable()
export class ProjectImagesResolver implements Resolve<ProjectImageEntity[]> {

  constructor(private projectImageService: ApiProjectImageService) {}

  /**
   * @returns {Observable<ProjectImageEntity[]>}
   */
  public resolve(route: ActivatedRouteSnapshot) {
    this.projectImageService.url = `/projects/${route.params['id']}/images`;
    return this.projectImageService.getAll();
  }
}
