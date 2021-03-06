/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-product-ir-13',
  // tslint:disable:max-line-length
  template: `
    <svg
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M42.292 4.235V15.8H39.99V8.23h-2.712V6.553a5.796 5.796 0 0 0 1.376-.174c.353-.1.684-.266.974-.49.425-.327.712-.878.859-1.654h1.805zm3.296 3.663a4.344 4.344 0 0 1 .701-2.389c.715-1.034 1.79-1.55 3.225-1.55 1.103 0 1.994.282 2.672.846a2.953 2.953 0 0 1 1.096 2.373 2.593 2.593 0 0 1-.43 1.499 2.107 2.107 0 0 1-1.163.85c.59.123 1.114.462 1.47.95.37.518.559 1.143.54 1.78a3.545 3.545 0 0 1-1.26 2.807c-.779.675-1.761 1.013-2.95 1.013-1.287 0-2.308-.372-3.062-1.115-.754-.744-1.131-1.749-1.131-3.014v-.15h2.215c0 .711.168 1.261.505 1.649.364.4.888.613 1.427.581.614 0 1.087-.182 1.419-.546.302-.335.465-.774.457-1.226a1.686 1.686 0 0 0-.584-1.352c-.32-.275-.814-.412-1.482-.412-.187 0-.374.01-.56.032v-1.7c.137.01.269.015.395.015 1.324 0 1.986-.493 1.986-1.479a1.359 1.359 0 0 0-.433-1.048 1.62 1.62 0 0 0-1.143-.4 1.575 1.575 0 0 0-1.254.507c-.294.337-.452.83-.473 1.479h-2.183zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 0 0 .847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconProductIr13Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr13Component],
  exports: [IconProductIr13Component]
})
export class IconProductIr13Module {}
