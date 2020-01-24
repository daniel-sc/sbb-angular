/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconKRMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M4.502 27.751h27.002H4.502zm0-19.5h27.002H4.502z" />
      <svg:path
        fill="#000"
        d="M15.14 11.997l-4.703 4.746 5.146 7.255h-3.307L8.63 18.613l-1.511 1.51v3.875H4.501V11.997H7.12v4.966l4.704-4.966h3.317zm-1.12 6.16h2.314v-2.313h1.326v2.313h2.32v1.325h-2.32v2.313h-1.326v-2.313H14.02v-1.325zm6.9-6.16h5.812c1.15 0 2.03.181 2.643.541.509.296.897.69 1.166 1.182.268.494.403 1.049.403 1.667 0 .702-.17 1.31-.505 1.831-.338.52-.807.893-1.409 1.116.531.13.947.428 1.248.887.192.29.32.594.386.912.066.316.151 1.04.255 2.175.076.83.195 1.348.352 1.55l.114.14h-2.733a2.048 2.048 0 01-.2-.65c-.041-.26-.095-.87-.16-1.822-.066-.847-.273-1.435-.62-1.76-.349-.325-.94-.488-1.778-.488h-2.355v4.72h-2.62V11.997zm2.619 2.06v3.3h2.503c.804 0 1.371-.115 1.7-.344.415-.29.624-.728.624-1.314 0-.569-.177-.986-.534-1.247-.356-.264-.917-.394-1.683-.394h-2.61z"
      />
    </svg:g>
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
export class SvgIconKRMedium {}

@Component({
  selector: 'sbb-icon-k-r-medium',
  template: `
    <svg sbbIconKRMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconKRMedium {}

@NgModule({
  declarations: [SvgIconKRMedium, IconKRMedium],
  exports: [SvgIconKRMedium, IconKRMedium]
})
export class IconKRMediumModule {}
