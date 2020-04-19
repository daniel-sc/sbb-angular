/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUploadSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.5 9V6.491h-14v2.5m10.908 3.655L12.5 8.71l-3.904 3.936m3.904 4.356V8.71"
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
export class SvgIconUploadSmall {}

@Component({
  selector: 'sbb-icon-upload-small',
  template: `
    <svg sbbIconUploadSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconUploadSmall {}

@NgModule({
  declarations: [SvgIconUploadSmall, IconUploadSmall],
  exports: [SvgIconUploadSmall, IconUploadSmall]
})
export class IconUploadSmallModule {}