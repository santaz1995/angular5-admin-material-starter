import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DROPZONE_CONFIG, DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneComponent } from 'app/common/components/dropzone/dropzone.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    RouterModule,
  ],
  declarations: [
    DropzoneComponent
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: ''
    },
  ],
  exports: [
    DropzoneComponent,
    CommonModule
  ]
})
export class AppDropzoneModule {
}
