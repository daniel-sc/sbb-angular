import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsComponent } from '@sbb-esta/angular-public/tabs';

export interface Person {
  id?: number;
  name: string;
  surname: string;
}

@Component({
  selector: 'sbb-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.css']
})
export class TabsExampleComponent implements OnInit {
  @ViewChild('tabs', { static: true }) tabsComponent: TabsComponent;

  disabled = false;
  removed = false;

  dataSet = '1';
  data = ['1', '50', '550'];

  personInitialLoad: Person = { id: 1, name: 'Max', surname: 'Muster' };

  person: Person[] = [];

  personList: Person[] = [
    { name: 'Peter', surname: 'Hahn' },
    { name: 'Andreas', surname: 'Hofstetter' },
    { name: 'Paul', surname: 'Walker' },
    { name: 'Urs', surname: 'Fischer' },
    { name: 'Antonio', surname: 'Conte' },
    { name: 'Miriam', surname: 'Höller' },
    { name: 'Veronika', surname: 'Schmidt' },
    { name: 'Petra', surname: 'Ivanov' },
    { name: 'Alexandra', surname: 'Maurer' },
    { name: 'Adriana', surname: 'Lima' }
  ];

  ngOnInit() {
    this.person.push(this.personInitialLoad);
  }

  private _initialPersonArrayByAmount(amount: number): void {
    let counter = 0;
    while (counter < amount) {
      for (const item of this.personList) {
        counter++;
        this.person.push({
          id: counter,
          name: item.name,
          surname: item.surname
        });
      }
    }
  }

  removeChange(removedTabId: string) {
    this.openPrevTabByTabIdOrDefault(removedTabId);
  }

  disableChange(disabledTabId: string) {
    this.openPrevTabByTabIdOrDefault(disabledTabId);
  }

  openPrevTabByTabIdOrDefault(tabId: string) {
    const tabsArray = this.tabsComponent.tabs.toArray();
    const activeTab = tabsArray.findIndex(currTab => currTab.active);
    const selectedTabIndex = tabsArray.findIndex(tab => tab.id === tabId);

    if (activeTab === selectedTabIndex) {
      if (selectedTabIndex > 0) {
        this.tabsComponent.openTabByIndex(selectedTabIndex - 1);
      } else {
        this.tabsComponent.openFirstTab();
      }
    }
  }

  onChangeOfDataSet(event: any) {
    this.person = [];
    if (event.startsWith('1')) {
      this.person.push(this.personInitialLoad);
    }
    if (event.startsWith('50')) {
      this._initialPersonArrayByAmount(50);
    }
    if (event.startsWith('550')) {
      this._initialPersonArrayByAmount(550);
    }
  }

  getCountOfPersons(): number {
    return Object.keys(this.person).length;
  }
}