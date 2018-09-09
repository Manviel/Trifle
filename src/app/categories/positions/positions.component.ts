import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '400px'
    });
  }
}
