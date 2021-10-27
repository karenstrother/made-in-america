import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styles: [],
})
export class SearchResultComponent implements OnInit {
  @Input() data: number;
  constructor() {}

  ngOnInit(): void {}
}
