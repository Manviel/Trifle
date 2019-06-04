import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';

import { OrderService } from '../services/order.service';

import { ListItem, Order } from '../interfaces/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {
  sub: Subscription

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalComponent>,
    private orderService: OrderService,
    public snackBar: MatSnackBar
  ) { }

  removeItem(order: ListItem) {
    this.orderService.remove(order, this.data);
  }

  onSubmit(list) {
    const newOrder: Order = {
      list: list
    }

    this.sub = this.orderService.createOrder(newOrder).subscribe(
      result => {
        this.snackBar.open(`Order ${result.order} has been added`, 'success', { duration: 2000 });

        this.orderService.clear();
      },
      err => this.snackBar.open(err.error.message, 'error', { duration: 2000 })
    );

    this.dialogRef.close();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }
}
