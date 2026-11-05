import ApexCharts from 'apexcharts';
import type { ApexGrid, ApexLegend, ApexStroke } from 'apexcharts';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions
} from 'ng-apexcharts';

import { DailyLineChartData, TimeData } from '../../models';
import { colors } from '../../../../consts';
import { customTooltip } from '../../consts';

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  grid: ApexGrid;
};

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly'
}

@Component({
  standalone: false,
  selector: 'app-daily-line-chart',
  templateUrl: './daily-line-chart.component.html',
  styleUrls: ['./daily-line-chart.component.scss']
})
export class DailyLineChartComponent implements OnInit, AfterViewInit {
  @Input() dailyLineChartData: DailyLineChartData;
  @ViewChild('chart') chart: ElementRef;
  public chartObj: ApexCharts;
  public chartOptions: Partial<ChartOptions>;
  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.monthly;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart(this.dailyLineChartData.monthlyData, this.dailyLineChartData.labels);
  }

  public ngAfterViewInit() {
    this.chartObj = new ApexCharts(
      this.chart.nativeElement,
      this.chartOptions
    )

    this.chartObj.render();
  }

  public initChart(data: TimeData, labels: string[]): void {
    this.chartOptions = {
      legend: {
        show: false
      },
      markers: {
        size: [0, 0, 5]
      },
      series: [
        {
          name: 'Mobile',
          type: 'line',
          data: data.mobile,
        },
        {
          name: 'Desktop',
          type: 'area',
          data: data.desktop
        },
        {
          name: 'Tablet',
          type: 'line',
          data: data.tablet
        }
      ],
      colors: [colors.BLUE, colors.LIGHT_BLUE, colors.YELLOW],
      chart: {
        toolbar: {
          show: false
        },
        height: 350,
        width: '100%',
        type: 'line',
        stacked: true
      },
      stroke: {
        width: [2, 0, 2],
        curve: ['smooth', 'smooth', 'straight']
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          }
        },
      },
      fill: {
        opacity: 1,
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: labels,
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#4A4A4A',
            fontSize: '0.875rem',
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        show: true,
        labels: {
          style: {
            colors: '#4A4A4A',
            fontSize: '0.875rem',
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
        },
      },
      tooltip: {
        custom: ({series, seriesIndex, dataPointIndex, w}) => {
          return customTooltip;
        }
      }
    };
  };

  public changedMatSelectionValue() {
    switch (this.selectedMatSelectValue) {
      case matSelectedFields.daily:
        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: 'Mobile',
              type: 'line',
              data: this.dailyLineChartData.dailyData.mobile,
            },
            {
              name: 'Desktop',
              type: 'area',
              data: this.dailyLineChartData.dailyData.desktop,
            },
            {
              name: 'Tablet',
              type: 'line',
              data: this.dailyLineChartData.dailyData.tablet,
            }
          ]
        };
        break;
      case matSelectedFields.weekly:
        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: 'Mobile',
              type: 'line',
              data: this.dailyLineChartData.weeklyData.mobile,
            },
            {
              name: 'Desktop',
              type: 'area',
              data: this.dailyLineChartData.weeklyData.desktop,
            },
            {
              name: 'Tablet',
              type: 'line',
              data: this.dailyLineChartData.weeklyData.tablet,
            }
          ]
        };
        break;
      default:
        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: 'Mobile',
              type: 'line',
              data: this.dailyLineChartData.monthlyData.mobile,
            },
            {
              name: 'Desktop',
              type: 'area',
              data: this.dailyLineChartData.monthlyData.desktop,
            },
            {
              name: 'Tablet',
              type: 'line',
              data: this.dailyLineChartData.monthlyData.tablet,
            }
          ]
        };
    }

    this.chartObj.updateSeries(this.chartOptions.series);
  }
}
