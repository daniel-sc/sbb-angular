/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShipSteeringWheelSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M11.5 6.5v3-3zm0-4.5v2.5V2zM7.965 7.964l2.12 2.122-2.12-2.122zM4.782 4.783L6.55 6.55 4.782 4.783zM6.5 11.5h3-3zm-4.5 0h2.5H2zm5.965 3.535l2.12-2.12-2.12 2.12zm-3.183 3.183L6.55 16.45l-1.768 1.768zM11.5 16.5v-3 3zm0 4.5v-2.5V21zm3.535-5.965l-2.12-2.12 2.12 2.12zm3.183 3.183L16.45 16.45l1.768 1.768zM16.5 11.5h-3 3zm4.5 0h-2.5H21zm-5.965-3.536l-2.12 2.122 2.12-2.122zm3.183-3.181L16.45 6.55l1.768-1.768zM18.5 11.5a7 7 0 10-14 0 7 7 0 0014 0zm-2 0a5 5 0 10-10 0 5 5 0 0010 0zm-3 0a2 2 0 10-4.001.001A2 2 0 0013.5 11.5z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-career',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconShipSteeringWheelSmall {}

@Component({
  selector: 'sbb-icon-ship-steering-wheel-small',
  template: `
    <svg sbbIconShipSteeringWheelSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconShipSteeringWheelSmall {}

@NgModule({
  declarations: [SvgIconShipSteeringWheelSmall, IconShipSteeringWheelSmall],
  exports: [SvgIconShipSteeringWheelSmall, IconShipSteeringWheelSmall]
})
export class IconShipSteeringWheelSmallModule {}
