/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPrinterSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8 19.5h8m-8-2h8m-8-2h8m-9.5 6h11v-8h-11v8zm0-5h-4v-9h19v9h-4m-11-9v-4h11v4"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconPrinterSmall {}

@Component({
  selector: 'sbb-icon-printer-small',
  template: `
    <svg sbbIconPrinterSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPrinterSmall {}

@NgModule({
  declarations: [SvgIconPrinterSmall, IconPrinterSmall],
  exports: [SvgIconPrinterSmall, IconPrinterSmall]
})
export class IconPrinterSmallModule {}
