import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FeedbackEntity } from 'app/common/entities/feedback.entity';
import { ApiFeedbackService } from 'app/common/service/data/api-feedback.service';

@Injectable()
export class FeedbacksResolver implements Resolve<FeedbackEntity[]> {

  constructor(private feedbackService: ApiFeedbackService) {}

  /**
   * @returns {Observable<FeedbackEntity[]>}
   */
  public resolve() {
    return this.feedbackService.getAll();
  }
}
