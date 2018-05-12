import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteEntityModalComponent } from 'app/common/modals/delete-entity/delete-entity-modal.component';
import { NotificationsService } from 'angular2-notifications/dist';
import { ProjectEntity } from 'app/common/entities/project.entity';
import { ApiProjectService } from 'app/common/service/data/api-project.service';

@Component({
  templateUrl: 'projects.component.html',
})
export class ProjectsComponent {

  private readonly projects: ProjectEntity[];

  /**
   * @param {MatDialog} dialog
   * @param {ActivatedRoute} route
   * @param {NotificationsService} notification
   * @param {ApiProjectService} projectService
   */
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private notification: NotificationsService,
              private projectService: ApiProjectService) {
    this.projects = this.route.snapshot.data['projects'];
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
        entity: 'Project'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectService.delete(id).subscribe( () => {
          const index = this.projects.findIndex(toDelete => toDelete.id === id);
          this.projects.splice(index, 1);
          this.notification.success('Success', 'Success deleted project');
        });
      }
    });
  }
}
