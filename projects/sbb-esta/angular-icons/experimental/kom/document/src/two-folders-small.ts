/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTwoFoldersSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18.5 9.5V20.501l-15 .008V11.5h10l1-2h4zm-12 2v-6h10l1-2h4v11h-3"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTwoFoldersSmall {}

@Component({
  selector: 'sbb-icon-two-folders-small',
  template: `
    <svg sbbIconTwoFoldersSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTwoFoldersSmall {}

@NgModule({
  declarations: [SvgIconTwoFoldersSmall, IconTwoFoldersSmall],
  exports: [SvgIconTwoFoldersSmall, IconTwoFoldersSmall]
})
export class IconTwoFoldersSmallModule {}
