/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWalletSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 5.5h17v13h-17v-13zm17 4H13c-3.329 0-3.329 5 0 5h7.5m-7-2.5a.5.5 0 11-1 0 .5.5 0 011 0z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconWalletSmall {}

@Component({
  selector: 'sbb-icon-wallet-small',
  template: `
    <svg sbbIconWalletSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconWalletSmall {}

@NgModule({
  declarations: [SvgIconWalletSmall, IconWalletSmall],
  exports: [SvgIconWalletSmall, IconWalletSmall]
})
export class IconWalletSmallModule {}