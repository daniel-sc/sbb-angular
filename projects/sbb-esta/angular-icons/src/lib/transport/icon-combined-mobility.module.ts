/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-combined-mobility',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M27.75 25.5a.751.751 0 0 0-1.5 0 .75.75 0 0 0 1.5 0zm-16.5 3.75v3h4.5v-3m10.502 0v3h4.498v-3M33 20.25h-2.25m0 1.5H18m9.75-.001a3.001 3.001 0 0 0-6 0m-6.75 3a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-3.75 3.75v.75h19.5V18c0-2.558-1.191-3.75-3.75-3.75h-1.5m-5.25-6l1.405 3.094M28.5 7.5L6 30M9 9.75A5.256 5.256 0 0 1 14.25 15 5.255 5.255 0 0 1 9 20.25 5.255 5.255 0 0 1 3.75 15 5.256 5.256 0 0 1 9 9.75M9 15l3-6.75h8.25l3-4.5H18m-8.687 1.5H13.5"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCombinedMobilityComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCombinedMobilityComponent],
  exports: [IconCombinedMobilityComponent],
})
export class IconCombinedMobilityModule { }