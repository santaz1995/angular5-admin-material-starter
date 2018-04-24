import {
  Directive, HostBinding, Inject, Input, OnInit, OnDestroy
} from '@angular/core';

import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[appAccordionLink]'
})
export class AccordionLinkDirective implements OnInit, OnDestroy {

  @Input() public group: any;

  @HostBinding('class.selected')
  @Input()
  get selected(): boolean {
    return this._selected;
  }

  protected _selected: boolean;
  protected nav: AccordionDirective;

  /**
   * @param {AccordionDirective} nav
   */
  constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
    this.nav = nav;
  }

  /**
   * @param {boolean} value
   */
  set selected(value: boolean) {
    this._selected = value;
    if (value) {
      this.nav.closeOtherLinks(this);
    }
  }

  public ngOnInit(): void {
    this.nav.addLink(this);
  }

  public ngOnDestroy(): void {
    this.nav.removeGroup(this);
  }

  public toggle(): void {
    this.selected = !this.selected;
  }
}
