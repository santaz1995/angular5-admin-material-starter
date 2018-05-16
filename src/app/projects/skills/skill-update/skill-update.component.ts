import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';
import { DeleteEntityModalComponent } from 'app/common/modals/delete-entity/delete-entity-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: 'skill-update.component.html',
})
export class SkillUpdateComponent {

  public skillForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  private readonly skill: ProjectSkillEntity;

  /**
   * @param {MatDialog} dialog
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {NotificationsService} notification
   * @param {ApiProjectSkillService} projectSkillService
   */
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private notification: NotificationsService,
              private projectSkillService: ApiProjectSkillService) {
    this.skill = this.route.snapshot.data['skill'];
    this.createForm();
  }

  /**
   * Delete skill
   */
  public delete() {
    const dialogRef = this.dialog.open(DeleteEntityModalComponent, {
      width: '320px',
      data: {
        entity: 'Skill'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectSkillService.delete(this.skill.id).subscribe(() => {
          this.notification.success('Success', 'Success deleted skill');
          return this.router.navigateByUrl('/projects/skills');
        });
      }
    });
  }

  /**
   * Update project skill
   */
  public update(): void {
    this.projectSkillService.update(this.skillForm.value).subscribe( () => {
      this.notification.success('Success', 'Skill updated');
      return this.router.navigateByUrl('/projects/skills');
    }, (errorRequest) => {
      this.handleBackendErrors(this.skillForm, errorRequest.error.violations);
    });
  }

  /**
   * Form update skill
   */
  private createForm(): void {
    this.skillForm = new FormGroup({
      id: new FormControl(this.skill.id, [Validators.required]),
      title: new FormControl(this.skill.title, [Validators.required]),
    });
  }
}
