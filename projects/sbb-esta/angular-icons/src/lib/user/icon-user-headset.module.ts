/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-user-headset',
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
          d="M15 10c0 1.941-1.325 3.5-3 3.5S9 11.941 9 10s1.325-3.5 3-3.5 3 1.559 3 3.5zm-4.898 2.72C7.255 13.974 5.5 17.033 5.5 20.5h13c0-3.053-1.412-6.344-4.601-7.78M8.5 11.5H7c-.242 0-.5-.225-.5-.5V9.006c0-.273.253-.506.5-.506h1.5v3zm3.5 0h5c.293 0 .5-.179.5-.5V9c0-.282-.155-.5-.5-.5h-1.5v3M7.487 8.438c1.088-5.332 8.125-5.104 8.934.021"
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
          d="M22.5 15c0 2.912-1.988 5.25-4.5 5.25s-4.5-2.338-4.5-5.25 1.988-5.25 4.5-5.25 4.5 2.338 4.5 5.25zm-7.346 4.081c-4.27 1.878-6.905 6.467-6.905 11.669h19.5c0-4.58-2.118-9.516-6.903-11.669M12.75 17.25H10.5c-.363 0-.75-.337-.75-.75v-2.991c0-.41.38-.759.75-.759h2.25v4.5zm5.25 0h7.5c.44 0 .75-.268.75-.75v-3c0-.423-.233-.75-.75-.75h-2.25v4.5m-12.02-4.593c1.632-7.998 12.188-7.656 13.401.031"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUserHeadsetComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserHeadsetComponent],
  exports: [IconUserHeadsetComponent]
})
export class IconUserHeadsetModule {}
