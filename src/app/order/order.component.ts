import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';

import { OrderService } from '../services/order.service';

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
    public dialog: MatDialog
  ) { }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        list: this.orderService.getList(),
        price: this.orderService.getPrice()
      }
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
