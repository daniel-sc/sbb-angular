import { Injectable } from '@angular/core';
import { UiComponent } from '../shared/ui-component';
import { TextareaShowcaseComponent } from '../examples/textarea-showcase/textarea-showcase.component';
import { LinksShowcaseComponent } from '../examples/links-showcase/links-showcase.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentUiService {

  uiComponents: UiComponent[];

  constructor() {
    this.uiComponents = [
      new UiComponent(
        'Button',
        'button',
        'Button',
        'Button is an extension to standard input element with icons and theming.',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        `showCode() {\n //write it out ...\n alert('Import code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Getting started code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Model binding code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Icons code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Auto resize code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Properties code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Events code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Styling code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Dependencies code goes here ...');\n}`
      ),
      new UiComponent(
        'List',
        'list',
        'List',
        'Listbox is used to select one or more values from a list of items.',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        `showCode() {\n //write it out ...\n alert('Import code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Getting started code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Model binding code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Icons code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Auto resize code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Properties code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Events code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Styling code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Dependencies code goes here ...');\n}`
      ),
      new UiComponent(
        'Table',
        'table',
        'Table',
        'Table is the successor of p-dataTable with a lightning fast performance (at least 10x faster) ' +
        'and excellent level of control over the presentation. p-table is called as TurboTable in order to ' +
        'differantiate if from the deprecated p-dataTable.',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        `showCode() {\n //write it out ...\n alert('Import code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Getting started code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Model binding code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Icons code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Auto resize code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Properties code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Events code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Styling code goes here ...');\n}`,
        `showCode() {\n //write it out ...\n alert('Dependencies code goes here ...');\n}`
      ),
      new UiComponent(
        'Link',
        'link',
        'Link',
        null,
        true,
        false,
        ['Davide Aresta', 'Stefan Meili, Dario D\'Oronzo'],
        null,
        '<a href="#" sbbLink mode="normal" icon="arrow">Bezeichnung</a>\n<a href="#" sbbSocialLink icon="facebook">Bezeichnung</a>',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        'import { LinksModule } from \'sbb-angular\';\n\n' +
        '@NgModule({\n  declarations: [\n    ...\n  ],\n  imports: [\n    ...\n    LinksModule\n  ]\n})\n' +
        'export class ExamplesModule { }',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        LinksShowcaseComponent,
        [],
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ),
      new UiComponent(
        'Loading Indicator',
        'loadingIndicator',
        'Loading Indicator',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Input Field',
        'inputField',
        'Input Field',
        'Input Field is an extension to standard input element with theming.',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Autocompletion',
        'autocompletion',
        'Autocompletion',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Text Area',
        'textArea',
        'Text Area',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}',
        TextareaShowcaseComponent
      ),
      new UiComponent(
        'Select',
        'select',
        'Select',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Date Picker',
        'datePicker',
        'Date Picker',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Time Chooser',
        'timeChooser',
        'Time Chooser',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Radio Button',
        'radioButton',
        'Radio Button',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Check Box',
        'checkBox',
        'Check Box',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Tab',
        'tab',
        'Tab',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Accordion',
        'accordion',
        'Accordion',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Section (Fieldset)',
        'section',
        'Section (Fieldset)',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Light Box',
        'lightBox',
        'Light Box',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Notification',
        'notification',
        'Notification',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Process Flow',
        'processFlow',
        'Process Flow',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Option Chooser (simple)',
        'optionChooserSimple',
        'Option Chooser (simple)',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      ),
      new UiComponent(
        'Option Chooser (multiple)',
        'optionChooserMultiple',
        'Option Chooser (multiple)',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        'Getting started text.',
        'Model binding text.',
        'Icon text.',
        'Auto resize text.',
        'Properties text.',
        'Events text.',
        'Styling text.',
        'Dependencies text.',
        'showCode() {\n //write it out ...\n alert(\'Import code goes here ...\');\n;}',
        'showCode() {\n //write it out ...\n alert(\'Getting started code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Model binding code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Icons code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Auto resize code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Properties code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Events code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Styling code goes here ...\';)\n;}',
        'showCode() {\n //write it out ...\n alert(\'Dependencies code goes here ...\';)\n;}'
      )
    ];
  }

  getUiComponentByRouterLink(name: any): UiComponent {
    return this.uiComponents.find(uiComponent => uiComponent.routerLink === name);
  }

  getUiComponentsBySearchValue(searchValue : any): Array<UiComponent> {

    let foundUiComponents : UiComponent[] = [];
    if(searchValue.length > 0) {
       foundUiComponents = this.uiComponents.filter(
         uiComponent => uiComponent.routerLink.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
       );
    }

    const newFoundUiComponents: UiComponent[] = [];
    foundUiComponents.forEach(function(item) {
      newFoundUiComponents.push(
        new UiComponent(
          item.id,
          item.routerLink,
          item.title,
          item.subTitle,
          item.isComponent,
          item.isDirective,
          item.authors,
          item.description,
          item.source,
          item.importText,
          item.gettingStartedText,
          item.modelBindingText,
          item.iconsText,
          item.autoResizeText,
          item.propertiesText,
          item.eventsText,
          item.stylingText,
          item.dependenciesText,
          item.importCode,
          item.gettingStartedCode,
          item.modelBindingCode,
          item.iconsCode,
          item.autoResizeCode,
          item.propertiesCode,
          item.eventsCode,
          item.stylingCode,
          item.dependenciesCode
        )
      );
    });

    for(const uiComponent of newFoundUiComponents) {
        if(uiComponent.id.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
           const index = uiComponent.id.toLowerCase().indexOf(searchValue.toLowerCase());
           const preFix = uiComponent.id.substring(0, index);
           const sufFix = uiComponent.id.substring(index + searchValue.length);
           const searchText = uiComponent.id.substring(index, index + searchValue.length);
           const newId = preFix + '<b>' + searchText + '</b>' + sufFix;
           uiComponent.id = newId;
        }
    }

    return newFoundUiComponents.sort((a,b) => a.id.localeCompare(b.id));
  }

  getAll(): Array<UiComponent> {
    return this.uiComponents.sort((a,b) => a.id.localeCompare(b.id));
  }

  getAllAsString(): Array<string> {
    const routerLinks : string[] = [];
    for(const uiComponent of this.uiComponents) {
        routerLinks.push(uiComponent['routerLink']);
    }
    return routerLinks;
  }
}
