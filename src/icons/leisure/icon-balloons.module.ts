import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-balloons',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M17.5 33.5v8.522M17 12.5c-2.968.271-5.701 2.946-6.5 6.5m9-.5a13.452 13.452 0 012.387-7.771A8.617 8.617 0 0017.5 9.5c-5.523 0-10 5.373-10 12 0 6.628 4.477 12 10 12a9.399 9.399 0 007.613-4.229C21.793 27.318 19.5 23.236 19.5 18.5zm5.612 10.77a8.615 8.615 0 004.39 1.23c5.521 0 10-5.373 10-12s-4.479-12-10-12a9.406 9.406 0 00-7.615 4.23m7.614 19.77v11.522m-.5-32.522c-2.968.271-5.702 2.945-6.5 6.5"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBalloonsComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBalloonsComponent],
  exports: [IconBalloonsComponent]
})
export class IconBalloonsModule {}