/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCupHotSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.5 14a6 6 0 01-12 0v-3.5h12V14zM4 20.5h15H4zm13.5-8H19a1.5 1.5 0 010 3h-1.69l.19-3zm-6-9.5v4-4zm3 1v4-4zm-6 0v4-4z"
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
export class SvgIconCupHotSmall {}

@Component({
  selector: 'sbb-icon-cup-hot-small',
  template: `
    <svg sbbIconCupHotSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCupHotSmall {}

@NgModule({
  declarations: [SvgIconCupHotSmall, IconCupHotSmall],
  exports: [SvgIconCupHotSmall, IconCupHotSmall]
})
export class IconCupHotSmallModule {}
