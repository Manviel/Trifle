import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Chart } from "chart.js";

import { AnalyticsService } from "../services/analytics.service";
import { AnalyticsPage } from "../interfaces/interface";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})
export class AnalyticsComponent implements AfterViewInit {
  @ViewChild("gainChart", { static: true }) gainRef: ElementRef;
  @ViewChild("orderChart", { static: true }) orderRef: ElementRef;

  sub: Subscription;
  average: number;

  constructor(private service: AnalyticsService) {}

  createChartConfig({ labels, data, label, color }) {
    return {
      type: "line",
      options: {
        responsive: true
      },
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            borderColor: color,
            steppedLine: false,
            fill: false
          }
        ]
      }
    };
  }

  ngAfterViewInit() {
    const gainConfig = {
      label: "Gain",
      labels: [],
      data: [],
      color: "rgb(255, 99, 132)"
    };

    const orderConfig = {
      label: "Order",
      labels: [],
      data: [],
      color: "rgb(54, 162, 235)"
    };

    this.sub = this.service.getAnalytics().subscribe((data: AnalyticsPage) => {
      this.average = data.average;

      gainConfig.labels = data.chart.map(item => item.label);
      gainConfig.data = data.chart.map(item => item.gain);

      orderConfig.labels = data.chart.map(item => item.label);
      orderConfig.data = data.chart.map(item => item.order);

      new Chart(this.gainRef.nativeElement, this.createChartConfig(gainConfig));
      new Chart(
        this.orderRef.nativeElement,
        this.createChartConfig(orderConfig)
      );
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
