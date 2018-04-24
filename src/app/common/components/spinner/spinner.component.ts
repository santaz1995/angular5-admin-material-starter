import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent {

  public isSpinnerVisible = true;

  @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';

  constructor(private router: Router,
              @Inject(DOCUMENT) private document: Document) {
    this.initSpinner();
  }

  private initSpinner(): void {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationStart) {
        this.isSpinnerVisible = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isSpinnerVisible = false;
      }
    }, () => {
      this.isSpinnerVisible = false;
    });
  }
}
