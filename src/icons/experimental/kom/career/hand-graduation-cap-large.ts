/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHandGraduationCapLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.993 34.52l-9.74-6.58a2 2 0 10-2.505 3.12L17.6 41.5h7.885l2.016 2h14.9l-10.056-8.127c-2.075-1.706-4.438-3.812-8.125-3.874H20c-3.063 0-3.063 4 0 4h4m-16.5-21L24 7l16.5 7.5L24 21 7.5 14.5zm33 0V22m-2 2a2 2 0 114.001.002A2 2 0 0138.5 24zm2.483 1.942L42 29.504m-1.982-3.563L39 29.504M12.5 16.47V23s3.559 3.5 11.5 3.5c7.989 0 10.5-3.5 10.5-3.5v-6.134"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
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
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-career',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconHandGraduationCapLarge {}

@Component({
  selector: 'sbb-icon-hand-graduation-cap-large',
  template: `
    <svg sbbIconHandGraduationCapLarge></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconHandGraduationCapLarge {}

@NgModule({
  declarations: [SvgIconHandGraduationCapLarge, IconHandGraduationCapLarge],
  exports: [SvgIconHandGraduationCapLarge, IconHandGraduationCapLarge]
})
export class IconHandGraduationCapLargeModule {}