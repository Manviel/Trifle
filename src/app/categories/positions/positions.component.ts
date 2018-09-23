import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

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

  constructor(
    public dialog: MatDialog,
    private positionService: PositionsService
  ) { }

  ngOnInit() {
    this.positionService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions
    });
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
