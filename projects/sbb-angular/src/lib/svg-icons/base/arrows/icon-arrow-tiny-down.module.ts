/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-arrow-tiny-down',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.642 11.112L12 12.638 9.16 10l-.66.673L12 14l3.5-3.327-.661-.673z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowTinyDownComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconArrowTinyDownComponent],
  exports: [IconArrowTinyDownComponent],
})
export class IconArrowTinyDownModule { }
