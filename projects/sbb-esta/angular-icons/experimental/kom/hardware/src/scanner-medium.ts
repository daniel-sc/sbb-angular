/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconScannerMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.25 9.75V7.8c0-1.266 1.365-2.55 2.55-2.55h20.4c1.146 0 2.55 1.58 2.55 2.55v1.95l-3 6 3 9v3.3c0 1.177-1.239 2.7-2.55 2.7H7.8c-1.311 0-2.55-1.257-2.55-2.55v-3.45l3-9-3-6zm0 0h25.5m-22.5 6h19.5m-22.5 9h25.5m-6.75 3h3"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconScannerMedium {}

@Component({
  selector: 'sbb-icon-scanner-medium',
  template: `
    <svg sbbIconScannerMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconScannerMedium {}

@NgModule({
  declarations: [SvgIconScannerMedium, IconScannerMedium],
  exports: [SvgIconScannerMedium, IconScannerMedium]
})
export class IconScannerMediumModule {}
