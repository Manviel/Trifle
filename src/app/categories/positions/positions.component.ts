import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { DialogComponent } from '../../dialog/dialog.component';

import { PositionsService } from '../../services/positions.service';

import { Position } from '../../interfaces/interface';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  @Input('categoryId') categoryId: string

  positions: Position[] = []

  position: Position

  constructor(
    public dialog: MatDialog,
    private positionService: PositionsService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.positionService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        position: this.position,
        category: this.categoryId
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.snackBar.open('Position created', 'success', { duration: 2000 });

      this.positionService.create(res).subscribe(pos => this.positions.push(pos));
    },
      err => this.snackBar.open(err.error.message, 'error', { duration: 2000 })
    );
  }

  deletePosition() { }
}
