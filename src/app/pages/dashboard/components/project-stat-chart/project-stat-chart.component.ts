import type { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from 'apexcharts';
import { Component, Input, OnInit } from '@angular/core';

import { ProjectStatData, ProjectTimeData } from '../../models';
import { colors } from '../../../../consts';

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
};

enum ProjectsType {
  lightBlue = 'lightBlue',
  SingApp = 'SingApp',
  RNS = 'RNS'
}

@Component({
  standalone: false,
  selector: 'app-project-stat-chart',
  templateUrl: './project-stat-chart.component.html',
  styleUrls: ['./project-stat-chart.component.scss']
})
export class ProjectStatChartComponent implements OnInit {
  @Input() projectsStatsData: ProjectStatData;
  public selectedStatsLightBlueData: ProjectTimeData;
  public selectedStatsSingAppData: ProjectTimeData;
  public selectedStatsRNSData: ProjectTimeData;
  public chartOptions: Partial<ChartOptions>;
  public projectsType: typeof ProjectsType = ProjectsType;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.daily;
    this.selectedStatsSingAppData = this.projectsStatsData.singApp.daily;
    this.selectedStatsRNSData = this.projectsStatsData.rns.daily;

    this.initChart();
  }

  public initChart(): void {
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: 100,
        width: 130,
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug'
        ],
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      tooltip: {
        y: {
          formatter(val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
  }

  public changeDateType(dateType: string, projectType: string): void {
    switch (projectType) {
      case this.projectsType.lightBlue:
        switch (dateType) {
          case 'Weekly':
            this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.week;
            break;
          case 'Monthly':
            this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.monthly;
            break;
          default:
            this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.daily;
        }
      break;
      case this.projectsType.SingApp:
        switch (dateType) {
          case 'Weekly':
            this.selectedStatsSingAppData = this.projectsStatsData.singApp.week;
            break;
          case 'Monthly':
            this.selectedStatsSingAppData = this.projectsStatsData.singApp.monthly;
            break;
          default:
            this.selectedStatsSingAppData = this.projectsStatsData.singApp.daily;
        }
      break;
      case this.projectsType.RNS:
        switch (dateType) {
          case 'Weekly':
            this.selectedStatsRNSData = this.projectsStatsData.rns.week;
            break;
          case 'Monthly':
            this.selectedStatsRNSData = this.projectsStatsData.rns.monthly;
            break;
          default:
            this.selectedStatsRNSData = this.projectsStatsData.rns.daily;
        }
      break;
    }
  }
}
