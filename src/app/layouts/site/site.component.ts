import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { SheetComponent } from '../../sheet/sheet.component';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  links = [
    { url: '/overview', name: 'Overview' },
    { url: '/analytics', name: 'Analytics' },
    { url: '/history', name: 'History' },
    { url: '/order', name: 'Add order' },
    { url: '/categories', name: 'Categories' }
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() { }

  openBottomSheet(): void {
    this.bottomSheet.open(SheetComponent);
  }

  logout(event: Event) {
    event.preventDefault();

    this.auth.logOut();

    this.router.navigate(['/login']);
  }
}
