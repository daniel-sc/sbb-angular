/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-chevron-small-down',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg *ngSwitchDefault [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#000" d="M8.092 10.35l3.904 3.95 3.904-3.948"/></svg>
      <svg *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''" [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M12.138 15.525l5.856 5.925 5.856-5.922"/></svg>
    </ng-container>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconChevronSmallDownComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconChevronSmallDownComponent],
  exports: [IconChevronSmallDownComponent],
})
export class IconChevronSmallDownModule { }