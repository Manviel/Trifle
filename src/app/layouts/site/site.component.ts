import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { url: '/categories', name: 'Range' }
  ];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  logout(event: Event) {
    event.preventDefault();

    this.auth.logOut();

    this.router.navigate(['/login']);
  }
}
