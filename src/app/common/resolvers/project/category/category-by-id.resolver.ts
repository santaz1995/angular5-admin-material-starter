import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';

@Injectable()
export class CategoryByIdResolver implements Resolve<ProjectCategoryEntity> {

  constructor(private projectCategoryService: ApiProjectCategoryService) {}

  /**
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<ProjectSkillEntity>}
   */
  public resolve(route: ActivatedRouteSnapshot) {
    return this.projectCategoryService.getById(route.params['id']);
  }
}
