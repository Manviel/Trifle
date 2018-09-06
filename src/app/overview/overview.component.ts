import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { SheetComponent } from '../sheet/sheet.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(SheetComponent);
  }

  ngOnInit() { }
}
