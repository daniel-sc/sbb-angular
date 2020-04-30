import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-tk',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.001 15h-2.92l2.54-11.763h-3.94zM18.541 1.037l-1.18 5.481h.04l5.541-5.481h3.902l-7.062 6.361L24.283 15h-3.341l-3.88-7.102L15.541 15H12.74l3.001-13.963z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaTkComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '16px', ratio: 1.75 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaTkComponent],
  exports: [IconSaTkComponent]
})
export class IconSaTkModule {}