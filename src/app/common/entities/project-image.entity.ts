import { ApiEntity } from 'app/common/entities/api-entity';

export class ProjectImageEntity extends ApiEntity {
  public id: number;
  public imagePath: string;
  public imageFullPath: string;
  public createdAt: string;
}
