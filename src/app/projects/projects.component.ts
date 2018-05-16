import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectEntity } from 'app/common/entities/project.entity';

@Component({
  templateUrl: 'projects.component.html',
})
export class ProjectsComponent {

  public readonly projects: ProjectEntity[];

  /**
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.projects = this.route.snapshot.data['projects'];
  }

  /**
   * Event clink on row
   * @param event
   * @returns {Promise<boolean>}
   */
  public selectRow(event) {
    if (event.type === 'click') {
      return this.router.navigateByUrl(`/projects/${event.row.id}/update`);
    }
  }
}
