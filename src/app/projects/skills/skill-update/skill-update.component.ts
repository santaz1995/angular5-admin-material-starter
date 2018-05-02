import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';

@Component({
  templateUrl: 'skill-update.component.html',
})
export class SkillUpdateComponent {

  public skillForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  private readonly projectSkill: ProjectSkillEntity;

  /**
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {NotificationsService} notification
   * @param {ApiProjectSkillService} projectSkillService
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private notification: NotificationsService,
              private projectSkillService: ApiProjectSkillService) {
    this.projectSkill = this.route.snapshot.data['projectSkill'];
    this.createForm();
  }

  /**
   * Update project skill
   */
  public update(): void {
    this.projectSkillService.update(this.skillForm.value).subscribe( () => {
      this.notification.success('Success', 'Project skill updated');
      this.router.navigateByUrl('/project-skills');
    }, (errorRequest) => {
      this.handleBackendErrors(this.skillForm, errorRequest.error.violations);
    });
  }

  /**
   * Form update skill
   */
  private createForm(): void {
    this.skillForm = new FormGroup({
      title: new FormControl(this.projectSkill.title, [Validators.required]),
    });
  }
}
