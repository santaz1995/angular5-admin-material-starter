import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'app/material.module';
import { IndexRouting } from 'app/index/index.routing';
import { IndexComponent } from 'app/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    IndexRouting
  ],
  declarations: [IndexComponent]
})

export class IndexModule {
}
