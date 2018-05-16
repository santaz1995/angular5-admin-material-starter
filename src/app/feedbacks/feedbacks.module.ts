import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from 'app/material.module';
import { MomentModule } from 'angular2-moment';
import { FeedbacksRouting } from 'app/feedbacks/feedbacks.routing';
import { FeedbacksComponent } from 'app/feedbacks/feedbacks.component';
import { ApiFeedbackService } from 'app/common/service/data/api-feedback.service';
import { FeedbacksResolver } from 'app/common/resolvers/feedback/feedbacks.resolver';
import { FeedbackViewComponent } from 'app/feedbacks/feedback-view/feedback-view.component';
import { FeedbackByIdResolver } from 'app/common/resolvers/feedback/feedback-by-id.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MomentModule,
    MaterialModule,
    FeedbacksRouting
  ],
  declarations: [
    FeedbacksComponent,
    FeedbackViewComponent
  ],
  providers: [
    ApiFeedbackService,
    FeedbacksResolver,
    FeedbackByIdResolver
  ],
})
export class FeedbacksModule { }
