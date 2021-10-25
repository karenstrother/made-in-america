import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from './shared/theme-switcher/theme-switcher.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'usa-components';
  data = [];
  filter = null;
  sort = 'value1';
  dropdownOptions1 = [
    {
      label: '-',
      value: null,
    },
    {
      label: 'Submitted',
      value: 'value1',
    },
    {
      label: 'Reviewed',
      value: 'value1',
    },
  ];

  dropdownOptions2 = [
    {
      label: 'Most Recent',
      value: 'value1',
    },
    {
      label: 'Alphabetical',
      value: 'value2',
    },
  ];
  selectedOption = '';
  current = 1;
  last = 100;

  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.themeSwitcherService.setStyle('theme', 'uswds-styles.css');
    const url =
      'https://api.forms.gov/agencydemo-prod/madeinamericawaiverrequest/submission';

    // curl --location --request GET 'https://api.forms.gov/agencydemo-prod/madeinamericawaiverrequest/submission' --header 'x-token: <token>'
    const options = {
      // headers?: HttpHeaders | {[header: string]: string | string[]},
      // observe?: 'body' | 'events' | 'response',
      // params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
      // reportProgress?: boolean,
      // responseType?: 'arraybuffer'|'blob'|'json'|'text',
      // withCredentials?: boolean,
    };
    // https://angular.io/guide/http#requesting-data-from-a-server
    // this.http.get(url, options).subscribe((data: Config) => {
    //     this.data = data;
    //     this.last = data.length / 20
    // };

    this.data = [{}, {}, {}];
  }

  onSortChange($event) {
    this.sort = $event;
  }
  onFilterChange($event) {
    this.filter = $event;
  }
}
