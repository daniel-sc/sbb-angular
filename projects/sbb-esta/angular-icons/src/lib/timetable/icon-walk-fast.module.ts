/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-walk-fast',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M20.252 20.39v4.36l-4.5 4.5m9-16.5l-1.502 7.5 3.002 3L24.75 30m-4.498-5.25v-4.5l1.5-7.5M15.75 21l1.5-5.25 4.5-3h3l3 3 3.75 1.5m-9.75-4.5l-1.5 7.5h2.999l1.502-7.5M13.5 14.25h-6m4.5 6H4.5m10.5 4.5H7.5m10.5-15h-7.5m12.737 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWalkFastComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWalkFastComponent],
  exports: [IconWalkFastComponent],
})
export class IconWalkFastModule { }