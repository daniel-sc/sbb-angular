/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-location-pin-b',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M16.248 16.105v3.7h2.497c.863 0 1.444-.084 1.742-.253.509-.286.764-.808.764-1.566 0-.852-.344-1.422-1.03-1.708-.267-.115-.828-.172-1.683-.172h-2.29zm0-4.389v3.269H18.5c.617 0 1.072-.045 1.366-.136.293-.097.528-.281.702-.554.174-.273.262-.591.262-.956 0-.363-.076-.675-.227-.933a1.255 1.255 0 0 0-.635-.553c-.228-.091-.677-.136-1.346-.136h-2.374zm-1.25-1.205h3.806c.923 0 1.598.117 2.019.35.389.216.696.528.922.938.227.41.341.857.341 1.34 0 .513-.124.967-.372 1.365-.249.397-.591.69-1.026.876.353.104.627.232.822.38.663.499.996 1.225.996 2.177 0 1.25-.465 2.146-1.392 2.694-.435.253-1.01.381-1.72.381h-4.395V10.51z"/><path stroke="#000" d="M26.25 15.012a8.25 8.25 0 0 0-16.5 0c.056 1.415.474 2.604 1.149 3.727l7.125 11.249 7.125-11.248c.665-1.166 1.089-2.378 1.101-3.728z"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationPinBComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinBComponent],
  exports: [IconLocationPinBComponent],
})
export class IconLocationPinBModule { }