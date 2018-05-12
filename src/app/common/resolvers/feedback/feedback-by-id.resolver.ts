import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FeedbackEntity } from 'app/common/entities/feedback.entity';
import { ApiFeedbackService } from 'app/common/service/data/api-feedback.service';

@Injectable()
export class FeedbackByIdResolver implements Resolve<FeedbackEntity> {

  constructor(private feedbackService: ApiFeedbackService) {}

  /**
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<FeedbackEntity>}
   */
  public resolve(route: ActivatedRouteSnapshot) {
    return this.feedbackService.getById(route.params['id']);
  }
}
