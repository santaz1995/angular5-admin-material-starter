import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';

@Component({
  templateUrl: 'skills.component.html',
})
export class SkillsComponent {

  public readonly skills: ProjectSkillEntity[];

  /**
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.skills = this.route.snapshot.data['skills'];
  }

  /**
   * Event clink on row
   * @param event
   * @returns {Promise<boolean>}
   */
  public selectRow(event) {
    if (event.type === 'click') {
      return this.router.navigateByUrl(`/projects/skills/${event.row.id}/update`);
    }
  }
}
