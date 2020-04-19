/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLinkExternalSmall]',
  template: `
    <svg:path fill="none" stroke="#000" d="M19.5 4.5L15 9m1-4.5h3.5V8M13 7.5H4.5v12h12V11" />
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
export class SvgIconLinkExternalSmall {}

@Component({
  selector: 'sbb-icon-link-external-small',
  template: `
    <svg sbbIconLinkExternalSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLinkExternalSmall {}

@NgModule({
  declarations: [SvgIconLinkExternalSmall, IconLinkExternalSmall],
  exports: [SvgIconLinkExternalSmall, IconLinkExternalSmall]
})
export class IconLinkExternalSmallModule {}