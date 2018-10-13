import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { ModalComponent } from '../modal/modal.component';

import { OrderService } from '../services/order.service';

import { Order } from '../interfaces/interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isRoot: boolean

  constructor(
    private router: Router,
    private orderService: OrderService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        list: this.orderService.getList(),
        price: this.orderService.getPrice()
      }
    });

    dialogRef.afterClosed().subscribe(list => {
      const newOrder: Order = {
        list: list
      }

      this.orderService.createOrder(newOrder).subscribe(
        result => {
          this.snackBar.open(`Order ${result.order} has been added`, 'success', { duration: 2000 });
        },
        err => this.snackBar.open(err.error.message, 'error', { duration: 2000 })
      );
    });
  }

  ngOnInit() {
    this.isRoot = this.router.url === '/order';

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = this.router.url === '/order';
      }
    });
  }
}
