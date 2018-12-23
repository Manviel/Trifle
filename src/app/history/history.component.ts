import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OrderService } from '../services/order.service';
import { Filter } from '../interfaces/interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {
  sub: Subscription

  offset = 0
  limit = 2
  reloading = false
  enough = false

  orders = []
  filter = {}

  constructor(private orderService: OrderService) { }

  private fetch() {
    const params = Object.assign({}, this.filter, {
      offset: this.offset,
      limit: this.limit
    })

    this.sub = this.orderService.fetch(params).subscribe(orders => {
      this.orders = this.orders.concat(orders);
      this.enough = orders.length < 2;
      this.reloading = false;
    });
  }

  loadMore() {
    this.offset += 2;
    this.fetch();
  }

  applyFilter(filter: Filter) {
    this.orders = []
    this.offset = 0
    this.filter = filter
    this.reloading = true
    this.fetch()
  }

  ngOnInit() {
    this.reloading = true;
    this.fetch()
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
