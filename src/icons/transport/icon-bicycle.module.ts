import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-bicycle',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M7 11.5c1.93 0 3.5 1.57 3.5 3.5S8.93 18.5 7 18.5 3.5 16.93 3.5 15s1.57-3.5 3.5-3.5m10.001 0c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.931 0-3.5-1.57-3.5-3.5s1.569-3.5 3.5-3.5M7 15l2-5.5h5.5l2-3H13m4.001 8.5L14.5 9.5m-7.292-2h2.793"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M10.5 17.25a5.256 5.256 0 015.25 5.25 5.256 5.256 0 01-5.25 5.25 5.256 5.256 0 01-5.25-5.25 5.256 5.256 0 015.25-5.25m15.002 0a5.256 5.256 0 015.25 5.25 5.256 5.256 0 01-5.25 5.25 5.255 5.255 0 01-5.25-5.25 5.255 5.255 0 015.25-5.25M10.5 22.5l3-8.25h8.25l3-4.5H19.5m6.002 12.75l-3.752-8.25m-10.937-3H15"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M14 22.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm20.001 0a7.5 7.5 0 017.5 7.5c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 010-15zM14 30l4.5-11.5h10l4.5-6h-7M34.001 30L28.5 18.5m-13.5-4h5"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBicycleComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconBicycleComponent],
  exports: [IconBicycleComponent]
})
export class IconBicycleModule {}