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
    this.renderedButtons = this.last > 3 ? [2, 3] : this.last > 2 ? [2] : [];
  }

  goTo(index) {
    this.current = index;
    window.scroll(0, 0);

    if ([1, 2].includes(this.current)) {
      this.renderedButtons = this.last > 3 ? [2, 3] : this.last > 2 ? [2] : [];
    } else if ([this.last, this.last - 1].includes(this.current)) {
      this.renderedButtons =
        this.last > 3 ? [this.last - 2, this.last - 1] : [2];
    } else {
      this.renderedButtons = [this.current - 1, this.current, this.current + 1];
    }
  }
}
