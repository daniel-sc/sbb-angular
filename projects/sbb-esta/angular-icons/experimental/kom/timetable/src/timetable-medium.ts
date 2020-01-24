/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTimetableMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M23.25 15.75c4.136 0 7.5 3.365 7.5 7.5 0 4.134-3.364 7.5-7.5 7.5s-7.5-3.366-7.5-7.5c0-4.135 3.364-7.5 7.5-7.5zM3 5.25h10.5H3zm13.5 0h6-6zm0 4.5h6-6zm9 0H33h-7.5zm0-4.5H33h-7.5zM3 9.75h10.5H3zm0 4.5h10.5H3zm0 4.5h7.5H3zm0 4.5h7.5H3zm0 4.5h7.5H3zM23.25 18v5.25h5.25"
    />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTimetableMedium {}

@Component({
  selector: 'sbb-icon-timetable-medium',
  template: `
    <svg sbbIconTimetableMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTimetableMedium {}

@NgModule({
  declarations: [SvgIconTimetableMedium, IconTimetableMedium],
  exports: [SvgIconTimetableMedium, IconTimetableMedium]
})
export class IconTimetableMediumModule {}
