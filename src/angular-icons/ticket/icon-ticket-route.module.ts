import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-ticket-route',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M18.5 11.5c0-1.7 1.3-3 3-3v-4h-19v14h19v-4c-1.7 0-3-1.3-3-3zm-8.433-1.334l-2.134 2.668M11 7.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4 5a1.5 1.5 0 11-.001 3 1.5 1.5 0 01.001-3z"
          />
          <path stroke-dasharray="1 1" d="M16.5 18V5" />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zM15.1 15.249l-3.2 4.002m4.6-8a2.25 2.25 0 110 4.499 2.25 2.25 0 010-4.5zm-6 7.499a2.25 2.25 0 11-.002 4.501 2.25 2.25 0 01.002-4.501z"
          />
          <path stroke-dasharray="1 1" d="M24.75 27V7.5" />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTicketRouteComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketRouteComponent],
  exports: [IconTicketRouteComponent]
})
export class IconTicketRouteModule {}