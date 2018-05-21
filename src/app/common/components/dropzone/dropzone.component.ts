import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropzone',
  templateUrl: 'dropzone.component.html',
})
export class DropzoneComponent {

  public config = {
    url: `${this.backendUrl}/uploads/multipart`,
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    paramName: 'file',
    method: 'post',
  };

  constructor(@Inject('backendUrl') protected backendUrl: string) {
  }

  /**
   * Upload
   * @param $event
   */
  public uploadSuccess($event) {
    /**
     * TODO: handel
     */
  }
}
