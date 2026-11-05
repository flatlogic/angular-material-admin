import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexFill, ApexGrid,
  ApexLegend, ApexMarkers,
  ApexNonAxisChartSeries, ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis
} from 'ng-apexcharts';

import { PieChartData } from '../../models';
import { colors } from '../../../../consts';

type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: ApexMarkers;
  grid: ApexGrid;
  labels: string[];
  responsive: ApexResponsive[];
  fill: ApexFill;
};

@Component({
  standalone: false,
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() pieChartData: PieChartData;
  public apexPieChartOptions: Partial<ChartOptions>;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.apexPieChartOptions = {
      series: this.pieChartData.series,
      chart: {
        type: 'donut',
        height: 400
      },
      colors: [
        colors.BLUE,
        colors.YELLOW,
        colors.PINK,
        colors.GREEN,
        colors.VIOLET
      ],
      legend: {
        position: 'bottom',
        itemMargin: {
          horizontal: 5,
          vertical: 30
        },
      },
      labels: this.pieChartData.labels
    };
  }
}
