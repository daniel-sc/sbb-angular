/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-wheelchair-reservation',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M13.055 16.398c-1.952.994-3.297 3.024-3.297 5.352 0 3.297 2.703 6 6 6 2.39 0 4.467-1.42 5.43-3.456M3.75 32.25h28.5V3.75H3.75v28.5zm12-20.25v8.25h7.5v8.25M16.5 9A.75.75 0 1 1 15 9a.75.75 0 0 1 1.5 0z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWheelchairReservationComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWheelchairReservationComponent],
  exports: [IconWheelchairReservationComponent],
})
export class IconWheelchairReservationModule { }