import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProjectService } from 'app/common/service/data/api-project.service';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';
import { ProjectEntity } from 'app/common/entities/project.entity';

/**
 * TODO: Set selected value
 */
@Component({
  templateUrl: 'project-update.component.html',
})
export class ProjectUpdateComponent {

  public projectForm: FormGroup;

  public categories: ProjectCategoryEntity[];

  private readonly project: ProjectEntity;

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
    this.project = this.route.snapshot.data['project'];
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
      id: new FormControl(this.project.id, [Validators.required]),
      title: new FormControl(this.project.title, [Validators.required]),
      description: new FormControl(this.project.description, [Validators.required]),
      company: new FormControl(this.project.company, [Validators.required]),
      url: new FormControl(this.project.url, [Validators.required]),
      realestDate: new FormControl(this.project.realestDate, [Validators.required]),
      projectCategories: new FormControl([this.project.projectCategories]),
    });
  }
}
