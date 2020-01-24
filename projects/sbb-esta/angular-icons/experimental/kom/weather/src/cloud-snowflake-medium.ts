/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudSnowflakeMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M24.03 21.576c3.217-1.053 2.818-6.258-.48-6.126 1.65-5.55-5.7-8.1-7.95-3-1.98-1.623-5.149-.063-4.8 2.85-2.85 0-3.673 5.077-.296 6.223M17.25 16.5V27m-5.229-5.25h10.5m-8.984-3.713l7.425 7.425m-7.403 0l7.425-7.425"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconCloudSnowflakeMedium {}

@Component({
  selector: 'sbb-icon-cloud-snowflake-medium',
  template: `
    <svg sbbIconCloudSnowflakeMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudSnowflakeMedium {}

@NgModule({
  declarations: [SvgIconCloudSnowflakeMedium, IconCloudSnowflakeMedium],
  exports: [SvgIconCloudSnowflakeMedium, IconCloudSnowflakeMedium]
})
export class IconCloudSnowflakeMediumModule {}
