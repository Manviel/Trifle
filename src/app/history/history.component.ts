import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OrderService } from '../services/order.service';

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

  constructor(private orderService: OrderService) { }

  private fetch() {
    const params = {
      offset: this.offset,
      limit: this.limit
    }

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

  ngOnInit() {
    this.reloading = true;
    this.fetch()
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
