/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChevronSmallDownSmall]',
  template: `
    <svg:path fill="none" stroke="#000" d="M8.092 10.35l3.904 3.95 3.904-3.948" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconChevronSmallDownSmall {}

@Component({
  selector: 'sbb-icon-chevron-small-down-small',
  template: `
    <svg sbbIconChevronSmallDownSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconChevronSmallDownSmall {}

@NgModule({
  declarations: [SvgIconChevronSmallDownSmall, IconChevronSmallDownSmall],
  exports: [SvgIconChevronSmallDownSmall, IconChevronSmallDownSmall]
})
export class IconChevronSmallDownSmallModule {}
