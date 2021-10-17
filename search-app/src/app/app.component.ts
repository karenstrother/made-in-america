import { Component, OnInit } from '@angular/core';
import { DropdownOptionsModel } from 'uswds-components';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SearchService } from './search.service';
import { ThemeSwitcherService } from './shared/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currentStyle = 'uswds';
  title = 'usa-components';
  searchTerm = '';
  sort = '';
  dropdownOptions = [
    {
      label: 'Most Recent',
      value: null,
    },
    {
      label: 'Option A',
      value: 'value1',
    },
    {
      label: 'Option B',
      value: 'value2',
    },
    {
      label: 'Option C',
      value: 'value3',
    },
    {
      label: 'Option D',
      value: 'value4',
    },
    {
      label: 'Option E',
      value: 'value5',
    },
  ];
  selectedOption = '';

  constructor(
    public data: SearchService,
    private themeSwitcherService: ThemeSwitcherService
  ) {}

  ngOnInit() {
    this.themeSwitcherService.setStyle('theme', 'uswds-styles.css');

    // const subscription = this.router.events.subscribe((data) => {
    //   if (data instanceof NavigationEnd) {
    //     const url = this.router.url;
    //   }
    // });
  }

  onOptionChange($event) {
    this.selectedOption = $event;
  }
}
