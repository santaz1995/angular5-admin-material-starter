import { Directive, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

import { AccordionLinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[appAccordion]',
})
export class AccordionDirective implements AfterContentChecked {

  protected readonly navlinks: Array<AccordionLinkDirective> = [];

  constructor( private router: Router) {
    setTimeout(() => this.checkOpenLinks());
  }

  /**
   * @param {AccordionLinkDirective} selectedLink
   */
  public closeOtherLinks(selectedLink: AccordionLinkDirective): void {
    this.navlinks.forEach((link: AccordionLinkDirective) => {
      if (link !== selectedLink) {
        link.selected = false;
      }
    });
  }

  /**
   * @param {AccordionLinkDirective} link
   */
  public addLink(link: AccordionLinkDirective): void {
    this.navlinks.push(link);
  }

  /**
   * @param {AccordionLinkDirective} link
   */
  public removeGroup(link: AccordionLinkDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  public checkOpenLinks(): void {
    this.navlinks.forEach((link: AccordionLinkDirective) => {

      if (link.group) {
        const routeUrl = this.router.url;
        const currentUrl = routeUrl.split('/');

        if (currentUrl.indexOf( link.group ) > 0) {
          link.selected = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }

  public ngAfterContentChecked(): void {
    this.router.events.filter( (event) => event instanceof NavigationEnd).subscribe(() => this.checkOpenLinks());
  }
}
