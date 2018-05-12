import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProjectService } from 'app/common/service/data/api-project.service';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';

@Component({
  templateUrl: 'project-store.component.html',
})
export class ProjectStoreComponent {

  public projectForm: FormGroup;

  public categories: ProjectCategoryEntity[];

  private handleBackendErrors = handleBackendErrors;

  /**
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {NotificationsService} notification
   * @param {ApiProjectService} projectService
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private notification: NotificationsService,
              private projectService: ApiProjectService) {
    this.categories = this.route.snapshot.data['categories'];
    this.createForm();
  }

  /**
   * Store project
   */
  protected store(): void {
    this.projectService.store(this.projectForm.value).subscribe( () => {
      this.notification.success('Success', 'Project created');
      this.router.navigateByUrl('/projects');
    }, (errorRequest) => {
      this.handleBackendErrors(this.projectForm, errorRequest.error.violations);
    });
  }

  /**
   * Form store project
   */
  private createForm(): void {
    this.projectForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      company: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required]),
      realestDate: new FormControl(null, [Validators.required]),
      projectCategories: new FormControl([]),
    });
  }
}
