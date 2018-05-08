import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { Router } from '@angular/router';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';

@Component({
  templateUrl: 'category-store.component.html',
})
export class CategoryStoreComponent {

  public categoryForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  /**
   * @param {Router} router
   * @param {NotificationsService} notification
   * @param {ApiProjectCategoryService} projectCategoryService
   */
  constructor(private router: Router,
              private notification: NotificationsService,
              private projectCategoryService: ApiProjectCategoryService) {
    this.createForm();
  }

  /**
   * Store project skill
   */
  protected store(): void {
    this.projectCategoryService.store(this.categoryForm.value).subscribe( () => {
      this.notification.success('Success', 'Project category created');
      this.router.navigateByUrl('/projects/categories');
    }, (errorRequest) => {
      this.handleBackendErrors(this.categoryForm, errorRequest.error.violations);
    });
  }

  /**
   * Form store category
   */
  private createForm(): void {
    this.categoryForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }
}
