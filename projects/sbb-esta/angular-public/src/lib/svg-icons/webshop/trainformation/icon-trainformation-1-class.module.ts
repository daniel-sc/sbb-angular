/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-trainformation-1-class',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path fill="#767676" d="M14.324 6.8h-1.808c-.24 1.712-1.696 2.256-3.28 2.224v1.712h2.816V18h2.272V6.8z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTrainformation1ClassComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '25px', ratio: 0.96 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconTrainformation1ClassComponent],
  exports: [IconTrainformation1ClassComponent]
})
export class IconTrainformation1ClassModule {}
