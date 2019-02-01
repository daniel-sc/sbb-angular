import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  ViewEncapsulation,
  Input,
  HostBinding,
  AfterContentInit,
  QueryList,
  ContentChildren,
  OnDestroy,
  Output,
  EventEmitter,
  NgZone
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioButton } from '../../radio-button/radio-button/radio-button.model';
import { ToggleOptionComponent } from '../toggle-option/toggle-option.component';
import { Subscription, Observable, merge, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { SBB_TOGGLE_COMPONENT, ToggleBase } from '../toggle-base';

let counter = 0;

@Component({
  selector: 'sbb-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
    {
      provide: SBB_TOGGLE_COMPONENT,
      useExisting: ToggleComponent
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToggleComponent extends RadioButton
  implements ToggleBase, ControlValueAccessor, OnInit, OnDestroy, AfterContentInit {
  /**
     * Radio button panel identifier
     */
  @Input()
  @HostBinding('id')
  inputId = `sbb-toggle-${counter++}`;

  /**
   * Indicates radio button name in formControl
   */
  @Input()
  formControlName: string;

  @HostBinding('class.sbb-toggle')
  toggleClass = true;

  @HostBinding('attr.role')
  role = 'group';

  @Output()
  toggleChange = new EventEmitter<any[]>();

  private _toggleValueChangesSubscription = Subscription.EMPTY;
  private _toggleValueChanges$: Observable<any>;

  constructor(private zone: NgZone) {
    super();

    this.zone.onStable.pipe(first()).subscribe(
      () => this.zone.run(() => {
        const defaultOption = this.toggleOptions.toArray()[0];
        defaultOption.selectOption();
      })
    );
  }

  @ContentChildren(forwardRef(() => ToggleOptionComponent))
  toggleOptions: QueryList<ToggleOptionComponent>;

  ngOnInit() {
    this.checkName();
  }

  ngAfterContentInit() {
    this.checkNumOfOptions();

    this._toggleValueChanges$ = of(this.toggleOptions.map(toggle => toggle.valueChange$))
      .pipe(
        switchMap(valueChange => merge(...valueChange))
      );

    this._toggleValueChangesSubscription = this._toggleValueChanges$.subscribe(
      (value) => {
        this.onChange(value);
        this.onTouched();
        this.writeValue(value);
        this.toggleChange.emit(value);
      }
    );
  }

  ngOnDestroy() {
    this._toggleValueChangesSubscription.unsubscribe();
  }

  /**
   * Class property that represents a change on the radio button
   */
  onChange = (_: any) => { };
  /**
   * Class property that represents a touch on the radio button
   */
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  uncheck() { }

  private checkName(): void {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    } else if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }

  /**
   * Throws an exception if the Toggle name doesn't match with the Toggle form control name
   */
  private throwNameError(): void {
    throw new Error(`
      If you define both a name and a formControlName attribute on your Toggle, their values
      must match. Ex: <sbb-toggle formControlName="food" name="food"></sbb-toggle>
    `);
  }

  private checkNumOfOptions(): void {
    if (this.toggleOptions.length !== 2) {
      console.log(this.toggleOptions.length);
      this.throwNotTwoOptionsError();
    }
  }

  private throwNotTwoOptionsError(): void {
    throw new Error('You must set two sbb-toggle-option into the sbb-toggle component');
  }


}
