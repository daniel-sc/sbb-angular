/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-shopping-bag-coupon',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M12.75 15V8.25a4.5 4.5 0 1 1 9 0V15m-13.5-3.75l-1.5 19.5h21l-1.5-19.5h-18zm9 6.75v7.5"/><path stroke-dasharray="1 1" d="M23.25 21.75a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShoppingBagCouponComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconShoppingBagCouponComponent],
  exports: [IconShoppingBagCouponComponent],
})
export class IconShoppingBagCouponModule { }