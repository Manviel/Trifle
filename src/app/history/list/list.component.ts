import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PopupComponent } from '../../popup/popup.component';

import { Order } from '../../interfaces/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() orders = []

  displayedColumns: string[] = ['no', 'date', 'time', 'amount', 'act'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  computePrice(order: Order): number {
    return order.list.reduce((total, i) => {
      return total += i.quantity * i.cost
    }, 0)
  }

  openSelected(order: Order): void {
    this.dialog.open(PopupComponent, {
      data: {
        list: order.list,
        price: this.computePrice(order)
      }
    });
  }
}