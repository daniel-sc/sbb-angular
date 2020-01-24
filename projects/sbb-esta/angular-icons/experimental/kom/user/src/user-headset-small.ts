/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserHeadsetSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M15 10c0 1.941-1.325 3.5-3 3.5S9 11.941 9 10s1.325-3.5 3-3.5 3 1.559 3 3.5zm-4.898 2.72C7.255 13.974 5.5 17.033 5.5 20.5h13c0-3.053-1.412-6.344-4.601-7.78M8.5 11.5H7c-.242 0-.5-.225-.5-.5V9.006c0-.273.253-.506.5-.506h1.5v3zm3.5 0h5c.293 0 .5-.179.5-.5V9c0-.282-.155-.5-.5-.5h-1.5v3M7.487 8.438c1.088-5.332 8.125-5.104 8.934.021"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconUserHeadsetSmall {}

@Component({
  selector: 'sbb-icon-user-headset-small',
  template: `
    <svg sbbIconUserHeadsetSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUserHeadsetSmall {}

@NgModule({
  declarations: [SvgIconUserHeadsetSmall, IconUserHeadsetSmall],
  exports: [SvgIconUserHeadsetSmall, IconUserHeadsetSmall]
})
export class IconUserHeadsetSmallModule {}
