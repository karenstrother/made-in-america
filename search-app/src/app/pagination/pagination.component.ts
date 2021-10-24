import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'usa-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  @Input() current: number;
  @Input() last: number;
  renderedButtons: number[];

  constructor() {}

  ngOnInit(): void {
    this.renderedButtons = [2, 3];
  }

  goTo(index) {
    this.current = index;

    if ([1, 2].includes(this.current)) {
      this.renderedButtons = [2, 3];
    } else if ([this.last, this.last - 1].includes(this.current)) {
      this.renderedButtons = [this.last - 2, this.last - 1];
    } else {
      this.renderedButtons = [this.current - 1, this.current, this.current + 1];
    }
  }
}
