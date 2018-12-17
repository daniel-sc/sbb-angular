import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sbb-lightbox-showcase',
  template: `
    <h4 class="sbbsc-block">Lightbox sharing data</h4>
    <sbb-lightbox-showcase-example></sbb-lightbox-showcase-example>

    <h4 class="sbbsc-block">Simple Lightbox</h4>
    <sbb-lightbox-showcase-example-2></sbb-lightbox-showcase-example-2>
    <sbb-lightbox-showcase-example-3></sbb-lightbox-showcase-example-3>
  `,
  styleUrls: ['lightbox-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LightboxShowcaseComponent {
}
