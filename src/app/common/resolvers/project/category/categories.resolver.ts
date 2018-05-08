import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';

@Injectable()
export class CategoriesResolver implements Resolve<ProjectCategoryEntity[]> {

  constructor(private projectCategoryService: ApiProjectCategoryService) {}

  /**
   * @returns {Observable<ProjectCategoryEntity[]>}
   */
  public resolve() {
    return this.projectCategoryService.getAll();
  }
}
