/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTicketsClassSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        fill="#000"
        d="M17.975 4.931v4.07h-.812V6.335h-.959v-.59c.2-.005.36-.025.487-.06a1.03 1.03 0 00.344-.173c.15-.116.25-.31.302-.582h.638zm-5.985 5.345V11H9.059c0-.22.036-.432.108-.632.07-.2.172-.373.302-.518.1-.11.217-.22.352-.325.134-.106.402-.3.802-.582.195-.136.332-.262.409-.379a.707.707 0 00.118-.406.604.604 0 00-.158-.433.544.544 0 00-.413-.165c-.42 0-.635.301-.65.904h-.78v-.089c0-.494.138-.876.414-1.146.269-.264.617-.396 1.044-.396.379 0 .695.108.949.323.276.234.414.548.414.944 0 .344-.11.641-.331.89-.072.082-.14.147-.203.196-.063.05-.23.168-.498.355a7.922 7.922 0 00-.55.41c-.11.094-.212.202-.307.325h1.909z"
      />
      <svg:path
        stroke="#000"
        d="M10.5 5.5v-2h9v15h-6v-13h-9v15h9v-2m-7.5-5h6m-6 2h6m1.5-2H18m-4.5-2H18"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTicketsClassSmall {}

@Component({
  selector: 'sbb-icon-tickets-class-small',
  template: `
    <svg sbbIconTicketsClassSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTicketsClassSmall {}

@NgModule({
  declarations: [SvgIconTicketsClassSmall, IconTicketsClassSmall],
  exports: [SvgIconTicketsClassSmall, IconTicketsClassSmall]
})
export class IconTicketsClassSmallModule {}