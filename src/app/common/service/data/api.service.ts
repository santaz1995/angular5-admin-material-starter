import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiEntity } from 'app/common/entities/api-entity';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class ApiService<T extends ApiEntity> {

  protected constructor(protected backendUrl: string,
                        protected http: HttpClient) {
  }

  /**
   * Transform data
   * @param {Record<string, any>} data
   * @returns {T}
   */
  protected abstract transformData(data: Record<string, any>): T;

  /**
   * Get endpoint url
   * @returns {string}
   */
  protected abstract endpointUrl(): string;

  /**
   * Get full url for request
   * @returns {string}
   */
  protected get fullUrl(): string {
    return this.backendUrl + this.endpointUrl();
  }

  /**
   * Get all entities
   * @returns {Observable<T[]>}
   */
  public getAll(): Observable<T[]> {

    return this.http.get(this.fullUrl)
      .map((data: Record<string, any>[]) =>
        data.map((item) => this.transformData(item))
      );
  }

  /**
   * Get entity by id
   * @param {number} id
   * @returns {Observable<T extends ApiEntity>}
   */
  public getById(id: number): Observable<T> {

    return this.http.get(`${this.fullUrl}/${id}`)
      .map((data: Record<string, any>) => this.transformData(data));
  }

  /**
   * Store new entity
   * @param {T} data
   * @returns {Observable<any>}
   */
  public store(data: T): Observable<any> {
    return this.http.post(this.fullUrl, data);
  }

  /**
   * Update entity
   * @param {T} data
   * @returns {Observable<any>}
   */
  public update(data: T): Observable<any> {
    return this.http.put(`${this.fullUrl}/${data.id}`, data);
  }

  /**
   * Remove entity
   * @param {number} id
   * @returns {Observable<any>}
   */
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.fullUrl}/${id}`);
  }
}
