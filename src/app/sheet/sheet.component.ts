import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html'
})
export class SheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef) { }
}
