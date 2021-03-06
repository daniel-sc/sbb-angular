/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-loading',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 10h-5V9h3.3c-.8-1.8-2.4-3.1-4.3-3.7-3.7-1.1-7.6 1-8.7 4.7-1.1 3.7 1 7.6 4.7 8.7 3.7 1.1 7.6-1 8.7-4.7h1c-.7 2.8-2.9 5-5.7 5.7-4.3 1.1-8.6-1.5-9.7-5.7C3.1 9.7 5.7 5.4 10 4.3c3.6-.9 7.3.8 9 4V5h1v5z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLoadingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconLoadingComponent],
  exports: [IconLoadingComponent]
})
export class IconLoadingModule {}
