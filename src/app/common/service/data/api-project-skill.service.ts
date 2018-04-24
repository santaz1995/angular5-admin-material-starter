import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProjectSkillEntity } from 'app/common/entities/project-skill.entity';

@Injectable()
export class ApiProjectSkillService extends ApiService<ProjectSkillEntity> {

  protected endpointUrl = '/project-skills';

  protected transformData(data: Record<string, any>): ProjectSkillEntity {
    return new ProjectSkillEntity(data);
  }

}
