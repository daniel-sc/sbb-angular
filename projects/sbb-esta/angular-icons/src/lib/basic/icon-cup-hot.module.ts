/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-cup-hot',
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
          d="M17.5 14a6 6 0 0 1-12 0v-3.5h12V14zM4 20.5h15H4zm13.5-8H19a1.5 1.5 0 0 1 0 3h-1.69l.19-3zm-6-9.5v4-4zm3 1v4-4zm-6 0v4-4z"
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
          d="M26.25 21c0 4.97-4.03 9-9 9s-9-4.03-9-9v-5.25h18V21zM6 30.75h22.5H6zm20.25-12h2.25a2.25 2.25 0 0 1 0 4.5h-2.535l.285-4.5zm-9-14.25v6-6zm4.5 1.5v6-6zm-9 0v6-6z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCupHotComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCupHotComponent],
  exports: [IconCupHotComponent]
})
export class IconCupHotModule {}
