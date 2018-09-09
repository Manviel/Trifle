import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
