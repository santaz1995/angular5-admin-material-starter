import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ProjectEntity } from 'app/common/entities/project.entity';

@Injectable()
export class ApiProjectService extends ApiService<ProjectEntity> {

  constructor(@Inject('backendUrl') protected backendUrl: string,
              protected http: HttpClient) {
    super(backendUrl, http);
  }

  /**
   * @param {Record<string, any>} data
   * @returns {ProjectEntity}
   */
  protected transformData(data: Record<string, any>): ProjectEntity {
    return new ProjectEntity(data);
  }

  /**
   * @returns {string}
   */
  protected endpointUrl(): string {
    return '/projects';
  }
}
