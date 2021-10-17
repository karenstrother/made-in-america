import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ThemeSwitcherService } from './shared/theme-switcher/theme-switcher.service';
import { HttpClient } from '@angular/common/http';

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
      label: 'Alphabetical',
      value: 'value1',
    },
  ];
  selectedOption = '';

  constructor(
    public data: SearchService,
    private themeSwitcherService: ThemeSwitcherService,
    private http: HttpClient
  ) {}

  ngOnInit() {      
    this.themeSwitcherService.setStyle('theme', 'uswds-styles.css');
    const url = '';
    const options = {
        // headers?: HttpHeaders | {[header: string]: string | string[]},
        // observe?: 'body' | 'events' | 'response',
        // params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
        // reportProgress?: boolean,
        // responseType?: 'arraybuffer'|'blob'|'json'|'text',
        // withCredentials?: boolean,
    };
    // https://angular.io/guide/http#requesting-data-from-a-server
    this.http.get(url, options)

  }

  onSortChange($event) {
    this.searchTerm = $event;
  }
  onSearchChange($event) {
    this.selectedOption = $event;
  }
}
