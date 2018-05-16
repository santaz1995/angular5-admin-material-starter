import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackEntity } from 'app/common/entities/feedback.entity';

@Component({
  templateUrl: 'feedbacks.component.html',
})
export class FeedbacksComponent {

  public readonly feedbacks: FeedbackEntity[];

  /**
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.feedbacks = this.route.snapshot.data['feedbacks'];
  }

  /**
   * Event clink on row
   * @param event
   * @returns {Promise<boolean>}
   */
  public selectRow(event) {
    if (event.type === 'click') {
      return this.router.navigateByUrl(`/feedbacks/${event.row.id}`);
    }
  }
}
