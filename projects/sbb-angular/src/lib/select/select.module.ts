import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionModule } from '../option/option.module';
import { SelectComponent, SBB_SELECT_SCROLL_STRATEGY_PROVIDER } from './select/select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { IconArrowSmallDownModule } from '../svg-icons/svg-icons';

@NgModule({
  imports: [
    IconArrowSmallDownModule,
    OptionModule,
    CommonModule,
    OverlayModule,
    PerfectScrollbarModule
  ],
  declarations: [
    SelectComponent
  ],
  exports: [
    OptionModule,
    OverlayModule,
    SelectComponent,
    PerfectScrollbarModule
  ],
  providers: [
    SBB_SELECT_SCROLL_STRATEGY_PROVIDER
  ]
})
export class SelectModule { }
