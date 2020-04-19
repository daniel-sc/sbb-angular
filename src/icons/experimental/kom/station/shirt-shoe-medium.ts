/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconShirtShoeMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18.967 25.625v6.75h-2.25s-1.73-6.75 0-13.5h6.75s.89 3.593 3.102 6.834c2.214 3.242 5.677 2.555 5.898 6.666h-6c-.891 0-2.38.045-4.5-3.75-2.226-4.078-6-3.754-6-3.754m9.75-8.246v-2.25l3.75 1.5 3-6-9-6s-2.754 1.5-5.25 1.5c-2.495 0-5.25-1.5-5.25-1.5l-9 6 3 6 3.75-1.5.75 15h2.25"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconShirtShoeMedium {}

@Component({
  selector: 'sbb-icon-shirt-shoe-medium',
  template: `
    <svg sbbIconShirtShoeMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconShirtShoeMedium {}

@NgModule({
  declarations: [SvgIconShirtShoeMedium, IconShirtShoeMedium],
  exports: [SvgIconShirtShoeMedium, IconShirtShoeMedium]
})
export class IconShirtShoeMediumModule {}