import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  data: any;

  yesterday = new Date();

  constructor(private service: AnalyticsService) {}

  ngOnInit() {
    this.service.getOverview().subscribe(res => {
      this.data = res;
    });

    this.yesterday.setDate(this.yesterday.getDate() - 1);
  }
}
