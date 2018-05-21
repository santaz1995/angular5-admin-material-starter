import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ProjectImageEntity } from 'app/common/entities/project-image.entity';

@Injectable()
export class ApiProjectImageService extends ApiService<ProjectImageEntity> {

  constructor(@Inject('backendUrl') protected backendUrl: string,
              protected http: HttpClient) {
    super(backendUrl, http);
  }

  private _url: any;

  /**
   * @param {Record<string, any>} data
   * @returns {ProjectImageEntity}
   */
  protected transformData(data: Record<string, any>): ProjectImageEntity {
    return new ProjectImageEntity(data);
  }

  /**
   * @returns {string}
   */
  public endpointUrl(): any {
    return this.url;
  }

  /**
   * @returns {any}
   */
  public get url(): any {
    return this._url;
  }

  /**
   * @param url
   */
  public set url(url) {
    this._url = url;
  }
}
