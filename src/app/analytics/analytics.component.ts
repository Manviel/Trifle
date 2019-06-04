import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Subscription } from "rxjs";

import { AnalyticsService } from "../services/analytics.service";
import { AnalyticsPage } from "../interfaces/interface";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})
export class AnalyticsComponent implements AfterViewInit {
  @ViewChild("gain") gainRef: ElementRef;
  @ViewChild("order") orderRef: ElementRef;

  sub: Subscription;
  average: number;
  pending = true;

  constructor(private service: AnalyticsService) {}

  ngAfterViewInit() {
    this.sub = this.service.getAnalytics().subscribe((data: AnalyticsPage) => {
      this.pending = false;
      this.average = data.average;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
