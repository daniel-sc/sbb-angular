/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconYoutube]',
  template: `
    <svg:path
      d="M19.8 9.4s-.2-1.1-.6-1.6c-.6-.6-1.3-.6-1.6-.7C15.4 7 12 7 12 7s-3.4 0-5.6.2c-.3 0-1 0-1.6.7-.5.5-.6 1.6-.6 1.6S4 10.6 4 11.9v1.2c0 1.3.2 2.5.2 2.5s.2 1.1.6 1.6c.6.6 1.4.6 1.8.7 1.2.1 5.4.1 5.4.1s3.4 0 5.6-.2c.3 0 1 0 1.6-.7.5-.5.6-1.6.6-1.6s.2-1.3.2-2.5v-1.2c0-1.2-.2-2.4-.2-2.4zm-9.5 5.1v-4.4l4.3 2.2-4.3 2.2z"
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
export class SvgIconYoutube {}

@Component({
  selector: 'sbb-icon-youtube',
  template: `
    <svg sbbIconYoutube></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconYoutube {}

@NgModule({
  declarations: [SvgIconYoutube, IconYoutube],
  exports: [SvgIconYoutube, IconYoutube]
})
export class IconYoutubeModule {}
