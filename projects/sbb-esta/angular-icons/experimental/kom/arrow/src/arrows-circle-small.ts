/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconArrowsCircleSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M4.51 12a7.5 7.5 0 017.514-7.486c2.912.006 6.238 2.346 7.466 4.986m.01-4.49l-.01 4.49H15m4.5 2.5a7.51 7.51 0 01-7.539 7.48c-2.894-.01-6.214-2.353-7.451-4.97M4.5 19l.01-4.49L9 14.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconArrowsCircleSmall {}

@Component({
  selector: 'sbb-icon-arrows-circle-small',
  template: `
    <svg sbbIconArrowsCircleSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowsCircleSmall {}

@NgModule({
  declarations: [SvgIconArrowsCircleSmall, IconArrowsCircleSmall],
  exports: [SvgIconArrowsCircleSmall, IconArrowsCircleSmall]
})
export class IconArrowsCircleSmallModule {}
