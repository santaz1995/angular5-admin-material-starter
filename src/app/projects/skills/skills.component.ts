import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteEntityModalComponent } from 'app/common/modals/delete-entity/delete-entity-modal.component';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  templateUrl: 'skills.component.html',
})
export class SkillsComponent {

  private readonly projectSkills: ProjectSkillEntity[];

  /**
   * @param {MatDialog} dialog
   * @param {ActivatedRoute} route
   * @param {NotificationsService} notification
   * @param {ApiProjectSkillService} projectSkillService
   */
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private notification: NotificationsService,
              private projectSkillService: ApiProjectSkillService) {
    this.projectSkills = this.route.snapshot.data['projectSkills'];
  }

  /**
   * Delete skill
   * @param id
   * @param title
   */
  public deleteSkill(id, title): void {
    const dialogRef = this.dialog.open(DeleteEntityModalComponent, {
      width: '320px',
      data: {
        entity: 'Skill'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectSkillService.delete(id).subscribe( () => {
          const index = this.projectSkills.findIndex(toDelete => toDelete.id === id);
          this.projectSkills.splice(index, 1);
          this.notification.success('Success', 'Success delete corporate client');
        });
      }
    });
  }
}
