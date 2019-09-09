The radio button panels are essentially large checkboxes, with more content options.

### Simple radio button panel

```html
<h4>Basic example</h4>
<div class="sbbsc-block" *ngFor="let option of radioOptions; index as i">
  <sbb-radio-button-panel
    [(ngModel)]="modelValue"
    name="model-option-selection"
    [value]="option.value"
    [label]="option.name"
  ></sbb-radio-button-panel>
</div>
```

### Radio button panel with a subtitle

```html
<h4>Radio button panel with subtitle</h4>
<sbb-radio-button-panel
  name="single-option"
  value="single-option"
  [checked]="checked"
  label="SBB - Finanzen"
  subtitle="Armin Burgermeister"
></sbb-radio-button-panel>
```

### Radio button panel with an icon

```html
<h4>Radio button panel with subtitle and an icon</h4>
<sbb-radio-button-panel
  name="single-option"
  value="single-option"
  [checked]="checked"
  label="SBB - Finanzen"
  subtitle="Armin Burgermeister"
>
  <sbb-icon-heart icon></sbb-icon-heart>
</sbb-radio-button-panel>
```