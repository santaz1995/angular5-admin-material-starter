import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: 'delete-entity-modal.component.html',
})
export class DeleteEntityModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {entity: string}) {
  }
}
