/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketDayMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path
        d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zm-21-6h15v13.5l-15-.036V11.25zm0 3h15m-12-3V9M12 18.75h2.25m0 3.75v-6 6zm4.5-11.25V9v2.25z"
      />
      <svg:path stroke-dasharray="1 1" d="M24.75 27V7.5" />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTicketDayMedium {}

@Component({
  selector: 'sbb-icon-ticket-day-medium',
  template: `
    <svg sbbIconTicketDayMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTicketDayMedium {}

@NgModule({
  declarations: [SvgIconTicketDayMedium, IconTicketDayMedium],
  exports: [SvgIconTicketDayMedium, IconTicketDayMedium]
})
export class IconTicketDayMediumModule {}