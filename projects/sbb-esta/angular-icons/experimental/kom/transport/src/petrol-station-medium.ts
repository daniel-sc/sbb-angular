/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPetrolStationMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.25 27.75h12V8.25h-12v19.5zm3-12h6v-4.5h-6v4.5zm-6 9h3v-13.5h-3v13.5z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-transport',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconPetrolStationMedium {}

@Component({
  selector: 'sbb-icon-petrol-station-medium',
  template: `
    <svg sbbIconPetrolStationMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPetrolStationMedium {}

@NgModule({
  declarations: [SvgIconPetrolStationMedium, IconPetrolStationMedium],
  exports: [SvgIconPetrolStationMedium, IconPetrolStationMedium]
})
export class IconPetrolStationMediumModule {}
