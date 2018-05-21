import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectImageEntity } from 'app/common/entities/project-image.entity';

@Component({
  templateUrl: 'project-images.component.html',
})
export class ProjectImagesComponent {

  public projectImages: ProjectImageEntity[];

  /**
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.projectImages = this.route.snapshot.data['projectImages'];
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
