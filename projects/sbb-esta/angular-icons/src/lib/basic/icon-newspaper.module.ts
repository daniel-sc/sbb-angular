/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-newspaper',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M18.5 17V4.5h-15v13.002c0 1.103.895 1.998 1.999 1.998h13.003a1.999 1.999 0 0 0 1.998-1.998V7.5h-2m-13 4h4v-3h-4v3zm5.5-1h6m-6-2h6m-12-2h12m-6 7h6m-6 2h6m-12-2h5m-5 2h5m-5 2h12"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M27.75 25.5V6.75H5.25v19.503a2.998 2.998 0 0 0 2.998 2.997h19.505a2.998 2.998 0 0 0 2.997-2.997V11.25h-3m-19.5 6h6v-4.5h-6v4.5zm8.25-1.5h9m-9-3h9m-18-3h18m-9 10.5h9m-9 3h9m-18-3H15m-7.5 3H15m-7.5 3h18"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconNewspaperComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconNewspaperComponent],
  exports: [IconNewspaperComponent]
})
export class IconNewspaperModule {}
