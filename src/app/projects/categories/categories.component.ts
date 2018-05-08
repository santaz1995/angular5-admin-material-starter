import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteEntityModalComponent } from 'app/common/modals/delete-entity/delete-entity-modal.component';
import { NotificationsService } from 'angular2-notifications/dist';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';
import { ApiProjectCategoryService } from 'app/common/service/data/api-project-category.service';

@Component({
  templateUrl: 'categories.component.html',
})
export class CategoriesComponent {

  private readonly categories: ProjectCategoryEntity[];

  /**
   * @param {MatDialog} dialog
   * @param {ActivatedRoute} route
   * @param {NotificationsService} notification
   * @param {ApiProjectCategoryService} projectCategoryService
   */
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private notification: NotificationsService,
              private projectCategoryService: ApiProjectCategoryService) {
    this.categories = this.route.snapshot.data['categories'];
  }

  /**
   * Delete category
   * @param id
   * @param title
   */
  public delete(id, title): void {
    const dialogRef = this.dialog.open(DeleteEntityModalComponent, {
      width: '320px',
      data: {
        entity: 'Category'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectCategoryService.delete(id).subscribe( () => {
          const index = this.categories.findIndex(toDelete => toDelete.id === id);
          this.categories.splice(index, 1);
          this.notification.success('Success', 'Success deleted project category');
        });
      }
    });
  }
}
