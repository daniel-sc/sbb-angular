/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-location-pin-map',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M27.75 13.5v-2.55l-7.5-4.05-7.5 6-7.5-5.4v13.125l7.5 5.475 7.5-6 1.2 1.35m-8.7-8.55v13.2m7.5-19.2v13.2m10.496-.317c0-2.228-1.677-4.032-3.746-4.032-2.067 0-3.744 1.804-3.744 4.032.024.691.215 1.273.52 1.822l3.236 5.498 3.233-5.498c.301-.57.495-1.162.5-1.822zM27.75 19.5a.75.75 0 0 1-.742.75.763.763 0 0 1-.758-.75c0-.41.34-.75.75-.75s.75.34.75.75z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinMapComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinMapComponent],
  exports: [IconLocationPinMapComponent],
})
export class IconLocationPinMapModule { }