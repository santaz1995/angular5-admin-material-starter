import { ApiEntity } from 'app/common/entities/api-entity';
import { ProjectCategoryEntity } from 'app/common/entities/project-category.entity';

export class ProjectEntity extends ApiEntity {
  public id: number;
  public title: string;
  public description: string;
  public company: string;
  public url: string;
  public realestDate: Date;
  public projectCategories: ProjectCategoryEntity[];
  public createdAt: string;
}
