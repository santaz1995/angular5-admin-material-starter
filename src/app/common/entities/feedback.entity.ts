import { ApiEntity } from 'app/common/entities/api-entity';

export class FeedbackEntity extends ApiEntity {
  public id: number;
  public email: string;
  public name: string;
  public subject: string;
  public message: string;
}
