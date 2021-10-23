import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usa-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  current = 1;
  last = 10;

  constructor() {}

  ngOnInit(): void {}


  goTo(index) {
      this.current = index
  }
}
