import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';

@Component({
  templateUrl: 'category-update.component.html',
})
export class CategoryUpdateComponent {

  public categoryForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  private readonly category: ProjectSkillEntity;

  /**
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {NotificationsService} notification
   * @param {ApiProjectCategoryService} projectCategoryService
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private notification: NotificationsService,
              private projectCategoryService: ApiProjectCategoryService) {
    this.category = this.route.snapshot.data['category'];
    this.createForm();
  }

  /**
   * Update project skill
   */
  public update(): void {
    this.projectCategoryService.update(this.categoryForm.value).subscribe( () => {
      this.notification.success('Success', 'Project category updated');
      this.router.navigateByUrl('/projects/categories');
    }, (errorRequest) => {
      this.handleBackendErrors(this.categoryForm, errorRequest.error.violations);
    });
  }

  /**
   * Form update skill
   */
  private createForm(): void {
    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.id, [Validators.required]),
      title: new FormControl(this.category.title, [Validators.required])
    });
  }
}
