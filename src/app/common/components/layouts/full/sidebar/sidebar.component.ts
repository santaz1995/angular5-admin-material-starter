import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class AppSidebarComponent implements OnDestroy {

  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  /**
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {MediaMatcher} media
   */
  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  /**
   * @returns {() => void}
   */
  get mobileQueryListener() {
    return this._mobileQueryListener;
  }

  /**
   * @param mobileQueryListener
   */
  set mobileQueryListener(mobileQueryListener) {
    this._mobileQueryListener = mobileQueryListener;
  }
}
