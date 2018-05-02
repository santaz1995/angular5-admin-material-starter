export class ApiEntity {

  readonly id: number;

  constructor(data: Record<string, any>) {
    Object.assign(this, data);
  }

}
