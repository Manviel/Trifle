import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { OrderService } from '../services/order.service';

import { ListItem } from '../interfaces/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalComponent>,
    private orderService: OrderService
  ) { }

  removeItem(order: ListItem) {
    this.orderService.remove(order, this.data);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
