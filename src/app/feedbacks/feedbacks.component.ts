import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackEntity } from 'app/common/entities/feedback.entity';

@Component({
  templateUrl: 'feedbacks.component.html',
})
export class FeedbacksComponent {

  public feedbacks: FeedbackEntity[];

  /**
   * @param {ActivatedRoute} route
   */
  constructor(private route: ActivatedRoute) {
    this.feedbacks = this.route.snapshot.data['feedbacks'];
  }
}
