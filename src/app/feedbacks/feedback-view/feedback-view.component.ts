import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackEntity } from 'app/common/entities/feedback.entity';

@Component({
  templateUrl: 'feedback-view.component.html',
})
export class FeedbackViewComponent {

  public feedback: FeedbackEntity;

  /**
   * @param {ActivatedRoute} route
   */
  constructor(private route: ActivatedRoute) {
    this.feedback = this.route.snapshot.data['feedback'];
  }

  public delete() {
    /** TODO: DO IT */
  }
}
