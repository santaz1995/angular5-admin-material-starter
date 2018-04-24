import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'app/material.module';
import { StarterRoutes } from 'app/starter/starter.routing';
import { StarterComponent } from 'app/starter/starter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes)

  ],
  declarations: [StarterComponent]
})

export class StarterModule {
}
