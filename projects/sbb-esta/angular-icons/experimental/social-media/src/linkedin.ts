/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLinkedin]',
  template: `
    <svg:path
      d="M7.5 5.1c0 1.2-.9 2.1-2.3 2.1C3.9 7.2 3 6.3 3 5.1S3.9 3 5.3 3s2.2.9 2.2 2.1zM3.2 21h4V8.9h-4V21zM17.4 8.6c-2.1 0-3.1 1.2-3.6 2V8.9h-4V21h4v-6.8c0-.4 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2 1.1 2 2.7V21h4v-7c.1-3.7-1.9-5.4-4.6-5.4z"
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
    class: 'sbb-icon sbb-icon-social-media',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLinkedin {}

@Component({
  selector: 'sbb-icon-linkedin',
  template: `
    <svg sbbIconLinkedin></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLinkedin {}

@NgModule({
  declarations: [SvgIconLinkedin, IconLinkedin],
  exports: [SvgIconLinkedin, IconLinkedin]
})
export class IconLinkedinModule {}
