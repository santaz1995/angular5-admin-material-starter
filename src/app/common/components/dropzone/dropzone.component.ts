import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ProjectImageEntity } from 'app/common/entities/project-image.entity';

@Component({
  selector: 'app-dropzone',
  templateUrl: 'dropzone.component.html',
})
export class DropzoneComponent {

  @Output() private imagePath = new EventEmitter<ProjectImageEntity>();

  public config = {
    url: `${this.backendUrl}/uploads/multipart`,
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    paramName: 'file',
    method: 'post',
  };

  constructor(@Inject('backendUrl') protected backendUrl: string) {}

  /**
   * @param imageData
   */
  public uploadSuccess(imageData): void {
    this.imagePath.emit({imagePath: imageData[1].imagePath} as ProjectImageEntity);
  }
}
