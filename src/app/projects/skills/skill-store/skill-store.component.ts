import { Component } from '@angular/core';
import { ApiProjectSkillService } from 'app/common/service/data/api-project-skill.service';
import { NotificationsService } from 'angular2-notifications/dist';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'skill-store.component.html',
})
export class SkillStoreComponent {

  public skillForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  /**
   * @param {Router} router
   * @param {NotificationsService} notification
   * @param {ApiProjectSkillService} projectSkillService
   */
  constructor(private router: Router,
              private notification: NotificationsService,
              private projectSkillService: ApiProjectSkillService) {
    this.createForm();
  }

  /**
   * Store project skill
   */
  protected store(): void {
    this.projectSkillService.store(this.skillForm.value).subscribe( () => {
      this.notification.success('Success', 'Project skill created');
      this.router.navigateByUrl('/project-skills');
    }, (errorRequest) => {
      this.handleBackendErrors(this.skillForm, errorRequest.error.violations);
    });
  }

  /**
   * Form store skill
   */
  private createForm(): void {
    this.skillForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }
}
