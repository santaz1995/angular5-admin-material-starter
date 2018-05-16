import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';

@Component({
  templateUrl: 'categories.component.html',
})
export class CategoriesComponent {

  public readonly categories: ProjectCategoryEntity[];

  /**
   * @param {ActivatedRoute} route
   * @param {Router} router
   */
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.categories = this.route.snapshot.data['categories'];
  }

  /**
   * Event clink on row
   * @param event
   * @returns {Promise<boolean>}
   */
  public selectRow(event) {
    if (event.type === 'click') {
      return this.router.navigateByUrl(`/projects/categories/${event.row.id}/update`);
    }
  }
}
