/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-gps-disabled',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M8.256 18.75H4.5m24.756-.006h3.742M18.756 29.25V33m0-24.75V4.5m-4.249 10.007a6 6 0 0 0 8.486 8.485m0 .001a6 6 0 0 1-8.485-8.486m-3.188-3.188a10.466 10.466 0 0 0-3.07 7.431c0 5.816 4.685 10.5 10.5 10.5 2.908 0 5.533-1.171 7.432-3.069m-1.971-4.97c.34-.753.538-1.581.538-2.46a6 6 0 0 0-6-6c-.879 0-1.707.2-2.46.538m11.235 11.235a10.468 10.468 0 0 0 1.725-5.774c0-5.815-4.684-10.5-10.5-10.5-2.136 0-4.117.636-5.773 1.725m3.313 3.314a5.952 5.952 0 0 1 2.462-.538 6 6 0 0 1 6 6c0 .879-.2 1.707-.54 2.46M7.613 7.613l22.275 22.274"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGpsDisabledComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconGpsDisabledComponent],
  exports: [IconGpsDisabledComponent],
})
export class IconGpsDisabledModule { }