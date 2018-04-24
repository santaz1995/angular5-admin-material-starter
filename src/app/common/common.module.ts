import { NgModule } from '@angular/core';
import { MenuItems } from 'app/common/components/layouts/menu-items/menu-items';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from 'app/common/directives/accordion';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  providers: [ MenuItems ]
})
export class CommonModule { }
