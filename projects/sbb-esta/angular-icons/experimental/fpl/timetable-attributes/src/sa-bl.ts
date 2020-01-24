/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaBl]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M5.84 6.678h1.102c1.42 0 2.96-.4 2.96-2.04 0-1.34-1.28-1.4-2.34-1.4H6.58l-.74 3.44zM4.56 12.8h.96c1.72 0 3.642-.2 3.642-2.36 0-1.461-1.36-1.681-2.861-1.681h-.9l-.84 4.04zM4.34 1.037h4.142c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.062-2.98 3.322v.04c1.56.24 2.24 1.44 2.24 2.94 0 4-4.48 4.32-6.56 4.32H1.42L4.34 1.038zM16.64 1.037h2.802L16.94 12.8h5.48l-.48 2.2H13.68z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 16px;
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
    viewBox: '0 0 24 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaBl {}

@Component({
  selector: 'sbb-icon-sa-bl',
  template: `
    <svg sbbIconSaBl></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaBl {}

@NgModule({
  declarations: [SvgIconSaBl, IconSaBl],
  exports: [SvgIconSaBl, IconSaBl]
})
export class IconSaBlModule {}
