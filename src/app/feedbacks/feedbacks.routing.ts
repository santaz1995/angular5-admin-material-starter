import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacksComponent } from 'app/feedbacks/feedbacks.component';
import { FeedbacksResolver } from 'app/common/resolvers/feedback/feedbacks.resolver';
import { FeedbackByIdResolver } from 'app/common/resolvers/feedback/feedback-by-id.resolver';
import { FeedbackViewComponent } from 'app/feedbacks/feedback-view/feedback-view.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbacksComponent,
    resolve: {
      feedbacks: FeedbacksResolver,
    },
  },
  {
    path: ':id',
    component: FeedbackViewComponent,
    resolve: {
      feedback: FeedbackByIdResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbacksRouting {}
