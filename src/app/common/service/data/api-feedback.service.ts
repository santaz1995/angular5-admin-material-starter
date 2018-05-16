import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { FeedbackEntity } from 'app/common/entities/feedback.entity';

@Injectable()
export class ApiFeedbackService extends ApiService<FeedbackEntity> {

  constructor(@Inject('backendUrl') protected backendUrl: string,
              protected http: HttpClient) {
    super(backendUrl, http);
  }

  /**
   * @param {Record<string, any>} data
   * @returns {FeedbackEntity}
   */
  protected transformData(data: Record<string, any>): FeedbackEntity {
    return new FeedbackEntity(data);
  }

  /**
   * @returns {string}
   */
  protected endpointUrl(): string {
    return '/feedbacks';
  }
}
