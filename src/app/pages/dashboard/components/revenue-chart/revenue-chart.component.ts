import { Component, Input, OnInit } from '@angular/core';

import { RevenueChartData } from '../../models';
import {colors} from '../../../../consts';

@Component({
  standalone: false,
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss']
})
export class RevenueChartComponent implements OnInit {
  @Input() revenueCharData: RevenueChartData;
  public revenueChart: any;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.revenueChart = {
      color: [colors.GREEN, colors.PINK, colors.YELLOW, colors.BLUE],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: 'center',
        right: 'right',
        data: ['Group A', 'Group B', 'Group C', 'Group D'],
        textStyle: {
          color: '#6E6E6E'
        }
      },
      series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['24%', '50%'],
        label: {
          show: false
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        hoverAnimation: false,
        avoidLabelOverlap: false,
        data: [
          {
            name: 'Group A',
            value: this.revenueCharData.groupA
          },
          {
            name: 'Group B',
            value: this.revenueCharData.groupB
          },
          {
            name: 'Group C',
            value: this.revenueCharData.groupC
          },
          {
            name: 'Group D',
            value: this.revenueCharData.groupD
          },
        ]
      }]
    };
  }
}
