import type { ApexFill } from 'apexcharts';
import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend, ApexGrid
} from 'ng-apexcharts';

import { ServerChartData } from '../../models';
import {colors} from '../../../../consts';

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  grid: ApexGrid;
  tooltip: any;
  colors: string[];
  fill: ApexFill;
};

@Component({
  standalone: false,
  selector: 'app-server-chart',
  templateUrl: './server-chart.component.html',
  styleUrls: ['./server-chart.component.scss']
})
export class ServerChartComponent implements OnInit {
  @Input() serverChartData: ServerChartData;
  public charts: Partial<ChartOptions>[];
  public serverDataTitles: string[];
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.charts = [
      this.initChart(this.serverChartData.firstServerChartData, colors.PINK),
      this.initChart(this.serverChartData.secondServerChartData, colors.BLUE),
      this.initChart(this.serverChartData.thirdServerChartData, colors.YELLOW)
    ];

    this.serverDataTitles = [
      this.serverChartData.firstDataTitle,
      this.serverChartData.secondDataTitle,
      this.serverChartData.thirdDataTitle,
    ]
  }

  public initChart(data: number[], color: string): Partial<ChartOptions> {
    return  {
      chart: {
        type: 'area',
        height: 80,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'STOCK ABC',
          data: data
        }
      ],
      colors: [color],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      labels: this.serverChartData.dates,
      xaxis: {
        type: 'datetime',
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        max: 50000,
        show: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false,
        padding: {
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      },
      tooltip: {
        enabled: false
      }
    };
  }
}
