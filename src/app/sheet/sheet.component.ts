import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html'
})
export class SheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    
    event.preventDefault();
  }
}
