import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Filter } from '../../interfaces/interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter<Filter>()

  order: number

  startDate = new FormControl();
  endDate = new FormControl();

  constructor() { }

  submitFilter() {
    const filter: Filter = {}

    if (this.order) {
      filter.order = this.order
    }

    if (this.startDate.value !== null) {
      filter.start = this.startDate.value
    }

    if (this.endDate.value !== null) {
      filter.end = this.endDate.value
    }

    this.onFilter.emit(filter)
  }

  ngOnInit() { }
}
