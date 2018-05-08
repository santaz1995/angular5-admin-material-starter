import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';

@Injectable()
export class ApiProjectCategoryService extends ApiService<ProjectCategoryEntity> {

  constructor(@Inject('backendUrl') protected backendUrl: string,
              protected http: HttpClient) {
    super(backendUrl, http);
  }

  /**
   * @param {Record<string, any>} data
   * @returns {ProjectCategoryEntity}
   */
  protected transformData(data: Record<string, any>): ProjectCategoryEntity {
    return new ProjectCategoryEntity(data);
  }

  /**
   * @returns {string}
   */
  protected endpointUrl(): string {
    return '/project-categories';
  }
}
