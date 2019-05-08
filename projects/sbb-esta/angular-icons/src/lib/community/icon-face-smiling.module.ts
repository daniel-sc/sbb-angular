/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-face-smiling',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zm-19.58 3.75c1.143 2.655 3.723 4.5 6.83 4.5 3.108 0 5.686-1.845 6.83-4.5m-11.33-9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m9 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFaceSmilingComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFaceSmilingComponent],
  exports: [IconFaceSmilingComponent],
})
export class IconFaceSmilingModule { }