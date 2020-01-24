/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconClockSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 4.5a7.5 7.5 0 017.5 7.5c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 010-15zm5 8h-5.5V7"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconClockSmall {}

@Component({
  selector: 'sbb-icon-clock-small',
  template: `
    <svg sbbIconClockSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconClockSmall {}

@NgModule({
  declarations: [SvgIconClockSmall, IconClockSmall],
  exports: [SvgIconClockSmall, IconClockSmall]
})
export class IconClockSmallModule {}
