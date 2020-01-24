/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLotusSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.5 9.75c0 2.606 1.29 5.068 3.5 6.676 3.971-2.89 4.667-8.222 1.554-11.909A8.812 8.812 0 0012 3.074C9.79 4.681 8.5 7.144 8.5 9.75zm-5.603 3.226a8.644 8.644 0 00-1.576 1.116A8.475 8.475 0 0010 18.494m4 0a8.473 8.473 0 008.679-4.403 8.61 8.61 0 00-1.576-1.116M6.997 7.206a8.448 8.448 0 00-3.31-.57 8.46 8.46 0 006.424 10.011m6.892-9.44a8.448 8.448 0 013.31-.57 8.46 8.46 0 01-6.424 10.01"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconLotusSmall {}

@Component({
  selector: 'sbb-icon-lotus-small',
  template: `
    <svg sbbIconLotusSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLotusSmall {}

@NgModule({
  declarations: [SvgIconLotusSmall, IconLotusSmall],
  exports: [SvgIconLotusSmall, IconLotusSmall]
})
export class IconLotusSmallModule {}
