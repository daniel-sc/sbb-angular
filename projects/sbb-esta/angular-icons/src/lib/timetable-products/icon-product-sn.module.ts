/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-product-sn',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><g fill="none" fill-rule="evenodd"><rect width="59" height="20" fill="#000" rx="2"/><path fill="#EFC800" fill-rule="nonzero" d="M4.186 11.949c-.032 2.86 2.364 4.127 4.923 4.127 3.141 0 4.81-1.593 4.81-3.721 0-2.632-2.592-3.168-3.434-3.38-2.898-.747-3.449-.86-3.449-1.755 0-.974.94-1.316 1.75-1.316 1.214 0 2.201.358 2.282 1.755h2.462c0-2.68-2.219-3.737-4.632-3.737-2.089 0-4.323 1.137-4.323 3.51 0 2.177 1.732 2.843 3.449 3.298 1.7.455 3.433.666 3.433 1.917 0 1.187-1.36 1.447-2.25 1.447-1.361 0-2.56-.602-2.56-2.145h-2.46zm11.123 3.85h2.38V8.034h.033L22.53 15.8h2.542V4.198h-2.38v7.783h-.032l-4.826-7.783h-2.526V15.8z"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductSnComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductSnComponent],
  exports: [IconProductSnComponent],
})
export class IconProductSnModule { }