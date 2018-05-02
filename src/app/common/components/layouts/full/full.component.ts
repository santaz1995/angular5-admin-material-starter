import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: [],
})
export class FullComponent implements OnDestroy {

  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

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
