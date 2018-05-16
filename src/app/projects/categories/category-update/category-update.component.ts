import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';
import { DeleteEntityModalComponent } from 'app/common/modals/delete-entity/delete-entity-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: 'category-update.component.html',
})
export class CategoryUpdateComponent {

  public categoryForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  private readonly category: ProjectSkillEntity;

  /**
   * @param {MatDialog} dialog
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {NotificationsService} notification
   * @param {ApiProjectCategoryService} projectCategoryService
   */
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private notification: NotificationsService,
              private projectCategoryService: ApiProjectCategoryService) {
    this.category = this.route.snapshot.data['category'];
    this.createForm();
  }

  /**
   * Update category
   */
  public update(): void {
    this.projectCategoryService.update(this.categoryForm.value).subscribe( () => {
      this.notification.success('Success', 'Category updated');
      return this.router.navigateByUrl('/projects/categories');
    }, (errorRequest) => {
      this.handleBackendErrors(this.categoryForm, errorRequest.error.violations);
    });
  }

  /**
   * Delete category
   */
  public delete() {
    const dialogRef = this.dialog.open(DeleteEntityModalComponent, {
      width: '320px',
      data: {
        entity: 'Category'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectCategoryService.delete(this.category.id).subscribe( () => {
          this.notification.success('Success', 'Success deleted category');
          return this.router.navigateByUrl('/projects/categories');
        });
      }
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
