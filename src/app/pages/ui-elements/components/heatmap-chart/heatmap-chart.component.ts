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

import { HeatmapChartData } from '../../models';
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
  selector: 'app-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.scss']
})
export class HeatmapChartComponent implements OnInit {
  @Input() heatmapChartData: HeatmapChartData;
  public apexHeatmapChartOptions: Partial<ChartOptions>;

  public ngOnInit(): void {
    this.initChart()
  }

  public initChart(): void {
    this.apexHeatmapChartOptions = {
      series: this.heatmapChartData.series,
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: [colors.BLUE],
      xaxis: {
        labels: {
          rotate: 0
        }
      }
    };
  }
}
